package com.ssafy.bbanggu.bakery.dto;

import org.springframework.web.multipart.MultipartFile;

import com.ssafy.bbanggu.bakery.domain.Bakery;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record BakeryDto(
	Long bakeryId,
	@NotNull(message = "사용자 ID는 필수 입력 값입니다.")
	Long userId,
	@NotBlank(message = "가게 이름은 필수 입력 값입니다.")
	String name,
	String description,
	@NotBlank(message = "사업자 등록 번호는 필수 입력 값입니다.")
	String businessRegistrationNumber,
	@NotBlank(message = "도로명 주소는 필수 입력 값입니다.")
	String addressRoad,
	String addressDetail,
	String bakeryImageUrl, // ✅ EC2 저장된 이미지 URL
	String bakeryBackgroundImgUrl, // ✅ EC2 저장된 배경 이미지 URL
	Double star,
	int reviewCnt
) {
	public static BakeryDto from(Bakery bakery) {
		return new BakeryDto(
			bakery.getBakeryId(),
			bakery.getUser().getUserId(),
			bakery.getName(),
			bakery.getDescription(),
			bakery.getBusinessRegistrationNumber(),
			bakery.getAddressRoad(),
			bakery.getAddressDetail(),
			bakery.getBakeryImageUrl(),
			bakery.getBakeryBackgroundImgUrl(),
			bakery.getStar(),
			bakery.getReviewCnt()
		);
	}
}

