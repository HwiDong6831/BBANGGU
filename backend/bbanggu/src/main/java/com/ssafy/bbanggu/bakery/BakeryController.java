package com.ssafy.bbanggu.bakery;

import com.ssafy.bbanggu.auth.security.CustomUserDetails;
import com.ssafy.bbanggu.bakery.domain.Bakery;
import com.ssafy.bbanggu.bakery.dto.BakeryCreateDto;
import com.ssafy.bbanggu.bakery.dto.BakeryDetailDto;
import com.ssafy.bbanggu.bakery.dto.BakeryDto;
import com.ssafy.bbanggu.bakery.dto.BakeryLocationDto;
import com.ssafy.bbanggu.bakery.dto.BakeryPickupTimetableDto;
import com.ssafy.bbanggu.bakery.dto.BakerySettlementDto;
import com.ssafy.bbanggu.bakery.dto.PickupTimeDto;
import com.ssafy.bbanggu.bakery.repository.BakeryRepository;
import com.ssafy.bbanggu.bakery.service.BakeryPickupService;
import com.ssafy.bbanggu.bakery.service.BakeryService;
import com.ssafy.bbanggu.common.exception.CustomException;
import com.ssafy.bbanggu.common.exception.ErrorCode;
import com.ssafy.bbanggu.common.response.ApiResponse;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("/bakery")
@RequiredArgsConstructor
public class BakeryController {

	private final BakeryService bakeryService;
	private final BakeryPickupService bakeryPickupService;
	private final BakeryRepository bakeryRepository;

	/**
	 * 가게 전체 조회 API
	 *
	 * @param sortBy 정렬 기준
	 * @param sortOrder asc or desc
	 * @param pageable 페이지 수
	 * @param userDetails 현재 로그인한 사용자 정보
	 * @return 가게 리스트
	 */
	@GetMapping
	public ResponseEntity<ApiResponse> getAllBakeries(
		@RequestParam(defaultValue = "createdAt") String sortBy,
		@RequestParam(defaultValue = "desc") String sortOrder,
		@PageableDefault(size = 10) Pageable pageable,
		@AuthenticationPrincipal CustomUserDetails userDetails
	) {
		log.info("✨ 가게 전체 조회 ✨");
		List<BakeryDetailDto> bakeries = bakeryService.getAllBakeries(userDetails, sortBy, sortOrder, pageable);
		return ResponseEntity.ok().body(new ApiResponse("모든 가게 조회에 성공하였습니다.", bakeries));
	}

	// 가게 추가
	@PostMapping
	public ResponseEntity<ApiResponse> createBakery(@RequestBody @Valid BakeryCreateDto bakery) {
		BakeryCreateDto createdBakery = bakeryService.createBakery(bakery);
		return ResponseEntity.status(HttpStatus.CREATED).body(new ApiResponse("가게 등록이 완료되었습니다.", createdBakery));
	}

	/**
	 * 가게 정산 정보 등록 api
	 */
	@PostMapping("/settlement")
	public ResponseEntity<ApiResponse> createSettlement(@RequestBody @Valid BakerySettlementDto settlement) {
		BakerySettlementDto createSettlement = bakeryService.createSettlement(settlement);
		return ResponseEntity.status(HttpStatus.CREATED).body(new ApiResponse("가게 정산 정보 등록이 완료되었습니다.", createSettlement));
	}

	// 가게 상세 조회
	@GetMapping("/{bakery_id}")
	public ResponseEntity<ApiResponse> getBakeryById(
		@PathVariable Long bakery_id,
		@AuthenticationPrincipal CustomUserDetails userDetails
	) {
		BakeryDetailDto bakery = bakeryService.findById(userDetails, bakery_id);
		return ResponseEntity.ok().body(new ApiResponse("가게 정보 조회에 성공하였습니다.", bakery));
	}

	// 가게 수정
	@PutMapping("/{bakery_id}")
	public ResponseEntity<ApiResponse> updateBakery(
		@AuthenticationPrincipal CustomUserDetails userDetails,
		@PathVariable Long bakery_id,
		@RequestBody BakeryDto updates
	) {
		BakeryDto updatedBakery = bakeryService.update(userDetails, bakery_id, updates);
		return ResponseEntity.ok().body(new ApiResponse("가게 정보가 성공적으로 수정되었습니다.", updatedBakery));
	}

	// 가게 삭제
	@DeleteMapping("/{bakery_id}")
	public ResponseEntity<ApiResponse> deleteBakery(
		@AuthenticationPrincipal CustomUserDetails userDetails,
		@PathVariable Long bakery_id
	) {
		if (userDetails == null) {
			throw new CustomException(ErrorCode.UNAUTHORIZED_USER);
		}

		Bakery bakery = bakeryRepository.findByBakeryIdAndDeletedAtIsNull(bakery_id);
		if (bakery == null) {
			throw new CustomException(ErrorCode.BAKERY_NOT_FOUND);
		}

		Long userId = userDetails.getUserId();
		if (!bakery.getUser().getUserId().equals(userId)) {
			throw new CustomException(ErrorCode.UNAUTHORIZED_USER);
		}

		bakeryService.delete(bakery);
		return ResponseEntity.ok().body(new ApiResponse("가게 삭제가 성공적으로 완료되었습니다.", null));
	}

	// 키워드로 가게 검색
	@GetMapping("/search")
	public ResponseEntity<ApiResponse> searchBakeries(
		@RequestParam(required = false) String keyword,
		@PageableDefault(size = 10) Pageable pageable,
		@AuthenticationPrincipal CustomUserDetails userDetails
	) {
		Page<BakeryDetailDto> bakeries = bakeryService.searchByKeyword(userDetails, keyword, pageable);
		return ResponseEntity.ok().body(new ApiResponse("검색 결과 조회에 성공하였습니다.", bakeries));
	}

	/**
	 * 픽업 시간 등록
	 */
	@PostMapping("/{bakery_id}/pickup")
	@PreAuthorize("hasAuthority('OWNER')")
	public ResponseEntity<ApiResponse> createPickupTime(
		@AuthenticationPrincipal CustomUserDetails userDetails,
		@PathVariable("bakery_id") Long bakeryId,
		@RequestBody BakeryPickupTimetableDto request
	){
		// ✅ 유효한 빵집인지 검증 (
		Bakery bakery = bakeryRepository.findByBakeryIdAndDeletedAtIsNull(bakeryId);
		if (bakery == null) {
			throw new CustomException(ErrorCode.BAKERY_NOT_FOUND);
		}

		// ✅ 현재 로그인된 사용자가 이 가게의 사장님인지 검증
		Long userId = userDetails.getUserId();
		if (!bakery.getUser().getUserId().equals(userId)) {
			throw new CustomException(ErrorCode.UNAUTHORIZED_USER);
		}

		bakeryPickupService.createPickupTime(bakery, request);
		return ResponseEntity.ok().body(new ApiResponse("픽업 시간이 성공적으로 등록되었습니다.", null));
	}

	/**
	 * 픽업 시간 조회
	 *
	 * @param bakeryId 베이커리 아이디
	 * @return 오늘 요일에 해당하는 픽업시간 반환
	 */
	@GetMapping("/{bakery_id}/pickup")
	public ResponseEntity<ApiResponse> getBakeryPickupTimatable(
		@PathVariable("bakery_id") Long bakeryId
	){
		// ✅ 유효한 빵집인지 검증 (
		Bakery bakery = bakeryRepository.findByBakeryIdAndDeletedAtIsNull(bakeryId);
		if (bakery == null) {
			throw new CustomException(ErrorCode.BAKERY_NOT_FOUND);
		}

		PickupTimeDto pickupTimetable = bakeryPickupService.getPickupTimetable(bakeryId);
		return ResponseEntity.ok().body(new ApiResponse("픽업시간 조회에 성공하였습니다.", pickupTimetable));
	}

	/**
	 * 픽업 시간 수정
	 */
	@PutMapping("/{bakery_id}/pickup")
	public ResponseEntity<ApiResponse> updatePickupTime(
		@AuthenticationPrincipal CustomUserDetails userDetails,
		@PathVariable("bakery_id") Long bakeryId,
		@RequestBody BakeryPickupTimetableDto request
	) {
		// ✅ 유효한 빵집인지 검증 (
		Bakery bakery = bakeryRepository.findByBakeryIdAndDeletedAtIsNull(bakeryId);
		if (bakery == null) {
			throw new CustomException(ErrorCode.BAKERY_NOT_FOUND);
		}

		// ✅ 현재 로그인된 사용자가 이 가게의 사장님인지 검증
		Long userId = userDetails.getUserId();
		if (!bakery.getUser().getUserId().equals(userId)) {
			throw new CustomException(ErrorCode.UNAUTHORIZED_USER);
		}

		bakeryPickupService.updatePickupTime(bakery, request);
		return ResponseEntity.ok().body(new ApiResponse("픽업 시간이 성공적으로 수정되었습니다.", null));
	}

	// 모든 가게의 좌표 조회
	@GetMapping("/map")
	public ResponseEntity<List<BakeryLocationDto>> getAllBakeryLocations() {
		List<BakeryLocationDto> bakeryLocations = bakeryService.findAllBakeryLocations();
		return ResponseEntity.ok(bakeryLocations);
	}
}
