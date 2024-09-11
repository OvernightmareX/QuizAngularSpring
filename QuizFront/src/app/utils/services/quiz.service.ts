import {Injectable, Injector} from '@angular/core';
import {Question} from "../types/question";
import {ConnectApiService} from "./connect-api.service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  questions: Question[] = [];
  scoreTotal: number = 0;

  constructor(private connectApiService: ConnectApiService, private router: Router) {
    const localQuestions = localStorage.getItem('questions');
    if(localQuestions && localQuestions.length > 0) {
      this.questions = JSON.parse(localQuestions);
    }
  }

  getQuestionsFromApi(quantity: number): void {
    this.connectApiService.getQuestions(quantity).subscribe({
        next: questions => {
          this.questions = questions;
          this.router.navigate(['/quiz']);
          localStorage.setItem('questions', JSON.stringify(questions));
        }
      }
    );
  }

  getAll(): Question[] {
    return this.questions;
  }

}
