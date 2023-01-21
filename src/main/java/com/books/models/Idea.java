package com.books.models;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;
import java.util.UUID;

@Getter
@Setter
@Builder
@AllArgsConstructor
@Document("ideas")
public class Idea {

    @Id
    private UUID id;

    private String title;

    private String description;

    private String content;

    private List<String> tags;

}
