package com.ssafy.bbanggu.common.exception;

import jakarta.validation.ConstraintViolationException;
import jdk.swing.interop.SwingInterOpUtils;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.ssafy.bbanggu.common.response.ErrorResponse;

@RestControllerAdvice
public class GlobalExceptionHandler {
	@ExceptionHandler(CustomException.class)
	public ResponseEntity<ErrorResponse> handleCustomException(CustomException e) {
		return ResponseEntity.status(e.getStatus())
			.body(new ErrorResponse(e.getCode(), e.getStatus().name(), e.getMessage()));
	}

	@ExceptionHandler(ConstraintViolationException.class)
	public ResponseEntity<ErrorResponse> handleValidationException(ConstraintViolationException e) {
		return ResponseEntity.status(HttpStatus.BAD_REQUEST)
			.body(new ErrorResponse(400, "Validation Error", "잘못된 형식의 요청입니다."));
	}

	@ExceptionHandler(Exception.class)
	public ResponseEntity<ErrorResponse> handleGenericException(Exception e) {
		return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
			.body(new ErrorResponse(500, "Internal Server Error", "서버 오류가 발생했습니다."));
	}

	@ExceptionHandler(MethodArgumentNotValidException.class)
	public ResponseEntity<ErrorResponse> handleValidationExceptions(MethodArgumentNotValidException e) {
		// 첫 번째 오류 메시지만 가져오기
		String errorMessage = e.getBindingResult().getFieldError().getDefaultMessage();
		return ResponseEntity.status(HttpStatus.BAD_REQUEST)
			.body(new ErrorResponse(400, "BAD_REQUEST", errorMessage));
	}

}
