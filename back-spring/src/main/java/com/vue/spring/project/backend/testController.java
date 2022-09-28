package com.vue.spring.project.backend;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping; 
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController; 
 

@RestController
public class testController {
   @GetMapping("/test")
    public String index() {
        System.out.println("test server start");
        return "index";
    }
} 