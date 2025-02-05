package com.ssafy.bbanggu.common.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.ssafy.bbanggu.auth.security.JwtAuthenticationFilter;
import com.ssafy.bbanggu.auth.security.JwtUtil;

import jakarta.servlet.http.HttpServletResponse;

@Configuration
public class SecurityConfig {
	private final JwtAuthenticationFilter jwtAuthenticationFilter;

	public SecurityConfig(JwtAuthenticationFilter jwtAuthenticationFilter) {
		this.jwtAuthenticationFilter = jwtAuthenticationFilter;
	}

	@Bean
	public SecurityFilterChain securityFilterChain(HttpSecurity http, JwtAuthenticationFilter jwtAuthenticationFilter) throws Exception {
		http
			.csrf(csrf -> csrf.disable()) // ✅ CSRF 보호 비활성화
			.authorizeHttpRequests(authz -> authz
				.requestMatchers(
					"/oauth/kakao/**",
					"/user/login",
					"/user/password/reset",
					"/user/password/reset/confirm",
					"/swagger-ui/**",
					"/v3/api-docs/**",
					"/user/register",
					"/auth/**",
					"/user/logout"
				).permitAll() // ✅ 공개 API
				.requestMatchers("/saving/**", "/user/update").authenticated() // ✅ 인증이 필요한 API
				.anyRequest().authenticated()
			)
			.addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class) // ✅ JWT 필터 추가
			.sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS)) // ✅ 세션 사용 안 함 (JWT만 사용)
			.exceptionHandling(exception -> exception
				.authenticationEntryPoint((request, response, authException) -> {
					System.out.println("❌ 인증 실패: " + authException.getMessage());

					// ✅ JSON 응답 설정
					response.setContentType("application/json");
					response.setCharacterEncoding("UTF-8");
					response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);

					// ✅ JSON 응답 데이터
					String jsonResponse = """
                    {
                        "code": 401,
                        "status": "UNAUTHORIZED",
                        "message": "인증이 필요합니다."
                    }
                    """;

					response.getWriter().write(jsonResponse);
					response.getWriter().flush();
				})
			)
			.formLogin(form -> form.disable()); // ✅ formLogin() 비활성화

		return http.build();
	}


	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
}
