package com.ssafy.bbanggu.favorite;

import java.util.List;
import java.util.stream.Collectors;

import com.ssafy.bbanggu.bakery.Bakery;
import com.ssafy.bbanggu.bakery.BakeryRepository;
import com.ssafy.bbanggu.bakery.dto.BakeryDetailDto;
import com.ssafy.bbanggu.bakery.service.BakeryService;
import com.ssafy.bbanggu.common.exception.CustomException;
import com.ssafy.bbanggu.common.exception.ErrorCode;
import com.ssafy.bbanggu.user.domain.User;
import com.ssafy.bbanggu.user.repository.UserRepository;

import lombok.RequiredArgsConstructor;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class FavoriteService {

	private final FavoriteRepository favoriteRepository;
	private final BakeryService bakeryService;
	private final UserRepository userRepository;
	private final BakeryRepository bakeryRepository;

	// 좋아요 추가
	@Transactional
	public void addFavorite(Long userId, Long bakeryId) {
		User user = userRepository.findById(userId)
			.orElseThrow(() -> new CustomException(ErrorCode.USER_NOT_FOUND));

		Bakery bakery = bakeryRepository.findById(bakeryId)
			.orElseThrow(() -> new CustomException(ErrorCode.BAKERY_NOT_FOUND));

		// 이미 좋아요한 상태인지 확인
		if (favoriteRepository.existsByUser_UserIdAndBakery_BakeryId(userId, bakeryId)) {
			throw new CustomException(ErrorCode.ALREADY_FAVORITE);
		}

		// 새로 좋아요 추가
		Favorite favorite = Favorite.builder()
			.user(user)
			.bakery(bakery)
			.build();

		favoriteRepository.save(favorite);
	}

	// 좋아요 취소
	@Transactional
	public void removeFavorite(Long userId, Long bakeryId) {
		if (!userRepository.existsById(userId)) {
			throw new CustomException(ErrorCode.USER_NOT_FOUND);
		}

		if (!bakeryRepository.existsById(bakeryId)) {
			throw new CustomException(ErrorCode.BAKERY_NOT_FOUND);
		}

		Favorite favorite = favoriteRepository.findByUser_UserIdAndBakery_BakeryId(userId, bakeryId)
			.orElseThrow(() -> new CustomException(ErrorCode.BAKERY_NOT_FAVORITE));

		favoriteRepository.delete(favorite);
	}

	// 유저가 좋아요한 모든 가게 조회
	@Transactional(readOnly = true)
	public Page<BakeryDetailDto> findAllFavorites(Long userId, double userLat, double userLng, Pageable pageable) {
		if (!userRepository.existsById(userId)) {
			throw new CustomException(ErrorCode.USER_NOT_FOUND);
		}

		// 좋아요 누른 가게 아이디 조회
		List<Favorite> favorites = favoriteRepository.findByUser_UserId(userId);
		List<Long> bakeryIds = favorites.stream()
			.map(f -> f.getBakery().getBakeryId())
			.toList();

		if(bakeryIds.isEmpty()) return Page.empty();

		Page<Bakery> bakeries = bakeryRepository.findByBakeryIdInAndDeletedAtIsNull(bakeryIds, pageable);

		List<BakeryDetailDto> bakeryDetailDtos = bakeries.getContent().stream()
			.map(b -> BakeryDetailDto.from(b, bakeryService.calculateDistance(userLat, userLng, b.getLatitude(), b.getLongitude())))
			.toList();

		return new PageImpl<>(bakeryDetailDtos, pageable, bakeries.getTotalElements());
	}
}
