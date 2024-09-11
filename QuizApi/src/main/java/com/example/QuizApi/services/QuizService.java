package com.example.QuizApi.services;

import com.example.QuizApi.entities.Answer;
import com.example.QuizApi.entities.Question;
import com.example.QuizApi.repositories.QuizRepository;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.annotation.PostConstruct;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class QuizService {

    private final QuizRepository quizRepository;

    private QuizService(QuizRepository quizRepository) throws IOException {
        this.quizRepository = quizRepository;
    }

    public List<Question> getSomeQuestions(int limit){
        List<Question> allQuestions = this.quizRepository.findAll();
        Collections.shuffle(allQuestions);
        return allQuestions.stream().limit(limit).collect(Collectors.toList());
    }

    @PostConstruct
    private void loadJSONQuiz() throws IOException {
        ObjectMapper objectMapper = new ObjectMapper();
        TypeReference<List<Question>> typeReference = new TypeReference<>(){};
        Path filePath = new ClassPathResource("quiz.json").getFile().toPath();
        String json = Files.readString(filePath);

        try {
            List<Question> questions = objectMapper.readValue(json, typeReference);
            this.quizRepository.saveAll(questions);
            System.out.println("Quiz saved!");
        } catch (IOException e) {
            System.out.println("Unable to save questions: " + e.getMessage());
        }
    }
}
