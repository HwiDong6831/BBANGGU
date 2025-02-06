package com.ssafy.bbanggu.saving.repository;

import com.ssafy.bbanggu.saving.domain.EchoSaving;
import com.ssafy.bbanggu.user.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface EchoSavingRepository extends JpaRepository<EchoSaving, Long> {
	Optional<EchoSaving> findByUser(User user);

	@Query("SELECT COALESCE(SUM(e.savedMoney), 0) FROM EchoSaving e")
	int sumTotalSavedMoney();

	@Query("SELECT COALESCE(SUM(e.reducedCo2e), 0) FROM EchoSaving e")
	int sumTotalReducedCo2e();
}
