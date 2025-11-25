package com.autosnap.backend.entity;



import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "screenshots")
public class Screenshot {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;

    private LocalDateTime createdAt;

    @Lob
    @Column(columnDefinition = "LONGBLOB")
    private byte[] imageData;

    public Screenshot() {}

    public Screenshot(String username, byte[] imageData) {
        this.username = username;
        this.imageData = imageData;
        this.createdAt = LocalDateTime.now();
    }

    public Long getId() { return id; }
    public String getUsername() { return username; }
    public LocalDateTime getCreatedAt() { return createdAt; }
    public byte[] getImageData() { return imageData; }
}
