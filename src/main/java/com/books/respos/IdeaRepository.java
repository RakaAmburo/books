package com.books.respos;

import com.books.models.Idea;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@RepositoryRestResource(collectionResourceRel = "ideas", path = "ideas")
public interface IdeaRepository extends MongoRepository<Idea, UUID> {
}
