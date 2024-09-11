import {Component, OnInit} from '@angular/core';
import {Question} from "../../utils/types/question";
import {QuizService} from "../../utils/services/quiz.service";
import {QuizCardComponent} from "../../components/quiz-card/quiz-card.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [
    QuizCardComponent
  ],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent implements OnInit{
  questions: Question[] = [];
  indexQuestion: number = 0;
  score: number = 0;

  hasAnswered: boolean = false;

  constructor(private quizService: QuizService, private route: Router) {}

  ngOnInit() {
    this.questions = this.quizService.getAll();
  }

  nextQuestion() {
    if(this.hasAnswered) {
      if(this.indexQuestion < this.questions.length-1){
        this.indexQuestion++;
        this.hasAnswered = false;
      }
    }
  }

  userAnswered(isCorrect: boolean) {
    if (isCorrect) {
      this.score++;
    }
    this.hasAnswered = true;
  }

  displayScore() {
    if(this.hasAnswered) {
      this.quizService.scoreTotal = this.score;
      this.route.navigate(['/score']);
    }
  }
}
