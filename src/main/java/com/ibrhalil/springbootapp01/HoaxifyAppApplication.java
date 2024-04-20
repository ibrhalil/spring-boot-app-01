package com.ibrhalil.springbootapp01;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = SecurityAutoConfiguration.class) //simdilik isteklerin atilabilemsi icin
public class HoaxifyAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(HoaxifyAppApplication.class, args);
	}

}
