package com.autosnap.backend.service;



import com.autosnap.backend.entity.Screenshot;
import com.autosnap.backend.repository.ScreenshotRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class ScreenshotService {

    private final ScreenshotRepository repository;

    public ScreenshotService(ScreenshotRepository repository) {
        this.repository = repository;
    }

    public Screenshot saveScreenshot(String username, MultipartFile file) throws Exception {
        Screenshot snapshot = new Screenshot(username, file.getBytes());
        return repository.save(snapshot);
    }
}
