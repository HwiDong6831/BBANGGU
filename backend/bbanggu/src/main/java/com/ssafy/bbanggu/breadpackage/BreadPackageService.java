package com.ssafy.bbanggu.breadpackage;

import com.ssafy.bbanggu.bakery.Bakery;
import com.ssafy.bbanggu.bakery.BakeryRepository;
import com.ssafy.bbanggu.breadpackage.dto.BreadPackageDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.Optional;
import java.util.*;
import java.util.stream.Collectors;


@Service
@RequiredArgsConstructor
@Transactional
public class BreadPackageService {

	private final BreadPackageRepository breadPackageRepository;
	private final BakeryRepository bakeryRepository;

	public BreadPackageDto createPackage(BreadPackageDto request) {
		Bakery bakery = bakeryRepository.findById(request.bakeryId())
			.orElseThrow(() -> new IllegalArgumentException("Bakery not found"));

		// BreadPackage 객체 생성
		BreadPackage breadPackage = BreadPackage.builder()
			.bakery(bakery)
			.price(request.price())
			.discountRate(request.discountRate())
			.quantity(request.quantity())
			.name(request.name())
			.description(request.description())
			.createdAt(LocalDateTime.now())
			.build();

		// BreadPackage 저장
		BreadPackage savedBreadPackage = breadPackageRepository.save(breadPackage);

		// 저장된 BreadPackage를 BreadPackageDto로 변환하여 리턴
		return BreadPackageDto.from(savedBreadPackage);
	}

	public boolean deletePackage(Long id) {
		Optional<BreadPackage> optionalPackage = breadPackageRepository.findById(id);
		if (optionalPackage.isPresent()) {
			BreadPackage breadPackage = optionalPackage.get();

			// 이미 삭제된 패키지인 경우 처리
			if (breadPackage.getDeletedAt() != null) {
				return false; // 이미 삭제된 빵꾸러미입니다.
			}

			// 논리적 삭제 처리
			breadPackage.setDeletedAt(LocalDateTime.now());
			breadPackageRepository.save(breadPackage);
			return true;
		}
		return false;
	}

	// 가게 ID로 모든 빵 패키지 리스트 조회 (논리적 삭제된 패키지 제외)
	public List<BreadPackageDto> getPackagesByBakeryId(Long bakeryId) {
		List<BreadPackage> breadPackages = breadPackageRepository.findByBakery_BakeryIdAndDeletedAtIsNull(bakeryId);
		return breadPackages.stream()
			.map(BreadPackageDto::from)
			.collect(Collectors.toList());
	}

	// 베이커리 별 기간별 빵 패키지 조회
	public List<BreadPackageDto> getPackagesByBakeryAndDate(Long bakeryId, LocalDateTime startDate, LocalDateTime endDate) {
		List<BreadPackage> breadPackages = breadPackageRepository.findByBakery_BakeryIdAndCreatedAtBetweenAndDeletedAtIsNull(bakeryId, startDate, endDate);
		return breadPackages.stream()
			.map(BreadPackageDto::from)
			.collect(Collectors.toList());
	}
}
