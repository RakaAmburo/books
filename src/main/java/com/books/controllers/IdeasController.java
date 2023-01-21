package com.books.controllers;

import com.books.models.Idea;
import com.books.respos.IdeaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/ideaDisabled")
public class IdeasController {

    private final IdeaRepository ideaRepository;

    @Autowired
    public IdeasController(IdeaRepository ideaRepository) {
        this.ideaRepository = ideaRepository;
    }

    @GetMapping("")
    public ResponseEntity<Void> create(){

        ideaRepository.save(Idea.builder().id(UUID.randomUUID())
                .content("content")
                .description("description")
                .tags(List.of("oneTag"))
                .title("title").build());

        return new ResponseEntity<>(HttpStatus.OK);
    }
}
