package com.ssafy.bbanggu.bakery.repository;

import com.ssafy.bbanggu.bakery.BakeryPickupTimetable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface BakeryPickupTimetableRepository extends JpaRepository<BakeryPickupTimetable, Long> {
	Optional<BakeryPickupTimetable> findByBakery_BakeryId(Long bakeryId);
}
