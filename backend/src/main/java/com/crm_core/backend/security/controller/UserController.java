package com.crm_core.backend.security.controller;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.crm_core.backend.security.model.Users;
import com.crm_core.backend.security.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.web.bind.annotation.PostMapping;


@RestController
public class UserController {
    
    @Autowired
    private UserService service;

    @PostMapping("/register")
    public Users register(@RequestBody Users user){
        return service.register(user);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Users user) {
        try {
        String token = service.verify(user);

        // Return token in a structured response
        return ResponseEntity.ok(new AuthResponse(token));
    } catch (BadCredentialsException e) {
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password");
    }
    }
    

}
