package com.autosnap.backend.controller;



import com.autosnap.backend.entity.Screenshot;
import com.autosnap.backend.service.ScreenshotService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/screenshot")
@CrossOrigin(origins = "http://localhost:5173")
public class ScreenshotController {

    private final ScreenshotService service;

    public ScreenshotController(ScreenshotService service) {
        this.service = service;
    }

    @PostMapping("/upload")
    public ResponseEntity<?> uploadScreenshot(
            @RequestParam("username") String username,
            @RequestParam("file") MultipartFile file
    ) {
        try {
            Screenshot saved = service.saveScreenshot(username, file);
            return ResponseEntity.ok("Screenshot saved with ID: " + saved.getId());
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Failed to save screenshot");
        }
    }
}
