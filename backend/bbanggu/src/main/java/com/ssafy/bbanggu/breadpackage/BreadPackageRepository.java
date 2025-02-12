package com.ssafy.bbanggu.breadpackage;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.time.LocalDateTime;
import java.util.Optional;

import com.ssafy.bbanggu.bakery.domain.Bakery;

@Repository
public interface BreadPackageRepository extends JpaRepository<BreadPackage, Long> {

	List<BreadPackage> findByBakery_BakeryIdAndDeletedAtIsNull(Long bakeryId);

	// BreadPackageRepository
	List<BreadPackage> findByBakery_BakeryIdAndCreatedAtBetweenAndDeletedAtIsNull(Long bakeryId, LocalDateTime startDate, LocalDateTime endDate);

}
