package com.ssafy.bbanggu.auth.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
public class KakaoTokenResponse {
	@JsonProperty("access_token")
	private String accessToken;

	@JsonProperty("token_type")
	private String tokenType;

	@JsonProperty("refresh_token")
	private String refreshToken;

	@JsonProperty("expires_in")
	private int expiresIn;

	@JsonProperty("refresh_token_expires_in")
	private int refreshTokenExpiresIn;
}

