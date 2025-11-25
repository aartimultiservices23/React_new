package com.autosnap.backend.repository;



import com.autosnap.backend.entity.Screenshot;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ScreenshotRepository extends JpaRepository<Screenshot, Long> {
}
