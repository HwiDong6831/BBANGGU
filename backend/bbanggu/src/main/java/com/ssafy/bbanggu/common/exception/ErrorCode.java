package com.ssafy.bbanggu.common.exception;

import org.springframework.http.HttpStatus;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum ErrorCode {
	// ✅ 사용자 관련 예외 (1000번대)
	INVALID_REQUEST(1000, HttpStatus.BAD_REQUEST, "잘못된 요청입니다."),
	USER_NOT_FOUND(1001, HttpStatus.NOT_FOUND, "해당 사용자를 찾을 수 없습니다."),
	INVALID_PASSWORD(1002, HttpStatus.UNAUTHORIZED, "비밀번호가 올바르지 않습니다."),
	ACCOUNT_DEACTIVATED(1003, HttpStatus.FORBIDDEN, "이 계정은 비활성화(탈퇴)되었습니다."),
	INVALID_AUTHORIZATION_HEADER(1004, HttpStatus.UNAUTHORIZED, "유효하지 않은 Authorization 헤더입니다."),
	MISSING_AUTHORIZATION_HEADER(1005, HttpStatus.UNAUTHORIZED, "Authorization 헤더가 존재하지 않습니다."),
	EMAIL_ALREADY_IN_USE(1006, HttpStatus.CONFLICT, "이미 사용 중인 이메일입니다."),
	PASSWORD_RESET_FAILED(1007, HttpStatus.BAD_REQUEST, "비밀번호 초기화에 실패했습니다."),
	PHONE_NUMBER_ALREADY_EXISTS(1008, HttpStatus.CONFLICT, "이미 사용 중인 전화번호입니다."),
	SAME_AS_OLD_PASSWORD(1009, HttpStatus.BAD_REQUEST, "이전 비밀번호와 동일한 비밀번호는 사용하실 수 없습니다."),
	INVALIE_PASSWORD(1010, HttpStatus.BAD_REQUEST, "비밀번호는 8자 이상이어야 합니다."),
	UNAUTHORIZED_USER(1011, HttpStatus.UNAUTHORIZED, "인증이 필요한 사용자입니다."),

	// ✅ kakao 인증 관련 예외(1500번대)
	KAKAO_AUTH_FAILED(1501, HttpStatus.BAD_REQUEST, "카카오 인증에 실패하였습니다."),
	KAKAO_USER_INFO_FAILED(1502, HttpStatus.BAD_REQUEST, "카카오 사용자 정보 요청에 실패하였습니다."),

	// ✅ 가게 관련 예외 (2000번대)
	NUMBER_ALREADY_IN_USE(2000, HttpStatus.CONFLICT, "이미 존재하는 사업자 등록 번호입니다."),
	BAKERY_NAME_ALREADY_IN_USE(2001, HttpStatus.CONFLICT, "이미 존재하는 가게 이름입니다."),
	BAKERY_NOT_FOUND(2002, HttpStatus.NOT_FOUND, "가게를 찾을 수 없습니다."),
	NO_PERMISSION_TO_EDIT_BAKERY(2003, HttpStatus.FORBIDDEN, "해당 가게를 수정할 권한이 없습니다."),
	NO_KEYWORD_ENTERED(2004, HttpStatus.BAD_REQUEST, "입력된 키워드가 없습니다. 검색어를 입력해주세요."),

	// ✅ 빵 관련 예외 (2100번대)

	// ✅ 빵꾸머리 관련 예외 (2200번대)
	BREAD_PACKAGE_NOT_FOUND(2200, HttpStatus.NOT_FOUND, "빵꾸러미를 찾을 수 없습니다."),
	BREAD_PACKAGE_QUANTITY_CONFLICT(2001, HttpStatus.CONFLICT, "빵꾸러미가 부족합니다."),

	// ✅ 이메일 인증 관련 예외 (3000번대)
	EMAIL_SEND_FAILED(3000, HttpStatus.INTERNAL_SERVER_ERROR, "이메일 전송에 실패하였습니다."),
	TOO_MANY_REQUESTS(3001, HttpStatus.TOO_MANY_REQUESTS, "너무 많은 요청을 보냈습니다. 나중에 다시 시도하세요."),
	INVALID_VERIFICATION_CODE(3002, HttpStatus.UNAUTHORIZED, "인증번호가 일치하지 않습니다. 다시 확인해주세요."),
	EXPIRED_VERIFICATION_CODE(3003, HttpStatus.GONE, "인증 코드가 만료되었습니다."),
	USED_VERIFICATION_CODE(3004, HttpStatus.GONE, "이미 사용된 인증 코드입니다."),
	EMAIL_ALREADY_VERIFIED(3005, HttpStatus.CONFLICT, "이미 인증된 이메일입니다."),
	VERIFICATION_CODE_NOT_FOUND(3006, HttpStatus.NOT_FOUND, "해당 이메일의 인증 코드가 존재하지 않습니다."),
	INVALID_EMAIL(3007, HttpStatus.BAD_REQUEST, "유효하지 않은 이메일 형식입니다."),
	EMAIL_NOT_FOUND(3008, HttpStatus.NOT_FOUND, "존재하지 않는 이메일입니다."),
	INVALID_AUTH_CODE_FORMAT(3009, HttpStatus.BAD_REQUEST, "유효하지 않은 인증번호 형식입니다."),

	// ✅ JWT 관련 예외 (4000번대)
	INVALID_ACCESS_TOKEN(4000, HttpStatus.UNAUTHORIZED, "유효하지 않은 Access Token 입니다."),
	INVALID_REFRESH_TOKEN(4001, HttpStatus.UNAUTHORIZED, "유효하지 않은 Refresh Token 입니다."),
	INVALID_TOKEN_MISSING_USERID(4002, HttpStatus.UNAUTHORIZED, "JWT 토큰에 userId 정보가 없습니다."),
	TOKEN_EXPIRED(4003, HttpStatus.UNAUTHORIZED, "토큰이 만료되었습니다."),
	TOKEN_VERIFICATION_FAILED(4004, HttpStatus.UNAUTHORIZED, "토큰 검증에 실패하였습니다."),
	INVALID_AUTHENTICATION(4005, HttpStatus.FORBIDDEN, "잘못된 인증 정보입니다."),
	REFRESH_TOKEN_NOT_FOUND(4006, HttpStatus.UNAUTHORIZED, "Refresh Token이 존재하지 않습니다."),
	EXPIRED_TOKEN(4007, HttpStatus.UNAUTHORIZED, "토큰이 만료되었습니다."),
	TOKEN_THEFT_DETECTED(4008, HttpStatus.FORBIDDEN, "토큰 탈취가 의심됩니다."),
	INCORRECT_TOKEN_FORMAT(4009, HttpStatus.BAD_REQUEST, "JWT 토큰 형식이 잘못되었습니다."),
	REFRESH_TOKEN_NOT_EXIST(4010, HttpStatus.UNAUTHORIZED, "쿠키에 Refresh Token이 없습니다."),
	NOT_MATCHED_AUTH_INFO(4011, HttpStatus.UNAUTHORIZED, "인증정보가 일치하지 않습니다."),

	// ✅ 요청, 응답 관련 예외 (4100번대)
	MISSING_REQUIRED_FIELDS(4100, HttpStatus.BAD_REQUEST, "필수 입력란이 누락되었습니다."),

	// ✅ 로그아웃 관련 예외 (4500번대)
	LOGOUT_FAILED(4500, HttpStatus.BAD_REQUEST, "로그아웃 처리 중 오류가 발생했습니다."),
	USER_ALREADY_LOGGED_OUT(4501, HttpStatus.BAD_REQUEST, "이미 로그아웃된 사용자입니다."),

	// ✅ 서버 내부 오류 (5000번대)
	INTERNAL_SERVER_ERROR(5000, HttpStatus.INTERNAL_SERVER_ERROR, "서버 내부 오류가 발생했습니다.");

	private final int code;
	private final HttpStatus status;
	private final String message;
}
