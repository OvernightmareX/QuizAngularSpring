package com.example.QuizApi.controllers;

import com.example.QuizApi.entities.Question;
import com.example.QuizApi.services.QuizService;
import com.example.QuizApi.utils.constants.ApiUrls;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(ApiUrls.QUIZ)
public class QuizController {

    public QuizService quizService;

    @Autowired
    public QuizController(QuizService quizService) {
        this.quizService = quizService;
    }

    @GetMapping
    public ResponseEntity<List<Question>> getAllQuestions(
            @RequestParam(value = "limit", required = false, defaultValue = "50") String limitParam) {

        int limit = Integer.parseInt(limitParam);
        return new ResponseEntity<List<Question>>(this.quizService.getSomeQuestions(limit), HttpStatus.OK);
    }
}
