import {Component, OnInit} from '@angular/core';
import {QuizService} from "../../utils/services/quiz.service";
import {Router} from "@angular/router";

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

  constructor(private quizService: QuizService, private router: Router) {
  }

  ngOnInit() {
    this.score = this.quizService.scoreTotal;
    this.totalQuestions = this.quizService.questions.length;
  }

  goHome() {
    this.router.navigate(['/']);
  }
}
