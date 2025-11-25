package com.autosnap.backend.controller;

import com.autosnap.backend.dto.LoginRequest;
import com.autosnap.backend.dto.LoginResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173") // Your Vite React App
public class AuthController {

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest request) {
        // hardcoded credentials
        if ("admin".equals(request.getUsername()) && "password".equals(request.getPassword())) {
            String fakeToken = "demo-token-123";
            return ResponseEntity.ok(new LoginResponse(fakeToken, request.getUsername()));
        }

        return ResponseEntity.status(401).build();
    }
}
