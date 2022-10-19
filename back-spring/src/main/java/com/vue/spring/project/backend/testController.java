package com.vue.spring.project.backend;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping; 
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import ch.qos.logback.core.net.SyslogOutputStream; 
 

@RestController
public class testController { 
 
	@RequestMapping("/api")
	public String helloWorld() {
		System.out.println("hello!!");
		return "hello!";
	}
    @RequestMapping("/")
    @ResponseBody
	public String index() {
		return "안녕하세요, 스프링입니다.";
	}
} 

 