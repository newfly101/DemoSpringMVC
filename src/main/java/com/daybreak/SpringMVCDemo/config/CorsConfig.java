package com.daybreak.SpringMVCDemo.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig {

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {

            // Static 폴더 안에 있는 빌드 무시
            @Override
            public void addResourceHandlers(ResourceHandlerRegistry registry) {
                // static 폴더에 있는 React 빌드 파일 무시
                registry.addResourceHandler("/**")
                        .addResourceLocations("classpath:/static/")
                        .resourceChain(false);
            }

            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/api/**") // CORS를 허용할 API 경로 지정
                        .allowedOrigins("http://localhost:3000") // React 개발 서버 주소
                        .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") // 허용할 HTTP 메서드
                        .allowedHeaders("*") // 모든 요청 헤더 허용
                        .allowCredentials(true) // 쿠키 전송 허용
                        .maxAge(3600); // Pre-flight 요청 캐시 시간 (초)
            }

        };
    }
}
