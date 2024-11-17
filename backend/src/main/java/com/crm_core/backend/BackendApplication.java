package com.crm_core.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication(scanBasePackages = "com.crm_core.backend")
@EntityScan(basePackages = "com.crm_core.backend.security.model")
@EnableJpaRepositories(basePackages = "com.crm_core.backend.security.repo")

public class BackendApplication {
 	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}

}
