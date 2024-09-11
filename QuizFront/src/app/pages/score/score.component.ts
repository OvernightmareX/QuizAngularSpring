import {Component, OnInit} from '@angular/core';
import {QuizService} from "../../utils/services/quiz.service";

@Component({
  selector: 'app-score',
  standalone: true,
  imports: [],
  templateUrl: './score.component.html',
  styleUrl: './score.component.css'
})
export class ScoreComponent implements OnInit{

  score: number = 0;
  totalQuestions: number = 0;

  constructor(private quizService: QuizService) {
  }

  ngOnInit() {
    this.score = this.quizService.scoreTotal;
    this.totalQuestions = this.quizService.questions.length;
  }
}
