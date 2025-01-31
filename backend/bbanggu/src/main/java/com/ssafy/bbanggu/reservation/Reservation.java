package com.ssafy.bbanggu.reservation;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import jakarta.persistence.*;
import java.time.LocalDateTime;

import com.ssafy.bbanggu.bakery.Bakery;
import com.ssafy.bbanggu.breadpackage.BreadPackage;
import com.ssafy.bbanggu.user.User;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "reservation")
public class Reservation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "reservation_id", columnDefinition = "INT UNSIGNED")
    private Long reservationId; // 예약 ID

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user; // 사용자 ID

    @ManyToOne
    @JoinColumn(name = "bakery_id", nullable = false)
    private Bakery bakery; // 가게 ID

    @ManyToOne
    @JoinColumn(name = "bread_package_id", nullable = false)
    private BreadPackage breadPackage; // 패키지 ID

    @Column(nullable = false)
    private Integer quantity; // 수량

    @Column(name = "total_price", nullable = false)
    private Integer totalPrice; // 총 가격

    @Column(name = "reserved_pickup_time", nullable = false)
    private LocalDateTime reservedPickupTime; // 예약 픽업 시간

    @Column(name = "pickup_at")
    private LocalDateTime pickupAt; // 픽업 완료 시간

    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime createdAt; // 생성일

    @Column(name = "cancelled_at")
    private LocalDateTime cancelledAt; // 취소일

    @Column(nullable = false, length = 45)
    private String status; // 상태
}
