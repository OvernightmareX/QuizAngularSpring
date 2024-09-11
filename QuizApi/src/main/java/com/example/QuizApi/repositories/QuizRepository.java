package com.example.QuizApi.repositories;

import com.example.QuizApi.entities.Question;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QuizRepository extends JpaRepository<Question, Integer> {}
