import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {Router, RouterOutlet} from "@angular/router";
import {QuizService} from "../../utils/services/quiz.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterOutlet,
    ReactiveFormsModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private router: Router, private quizService: QuizService) { }

  form = new FormGroup({
    quantity: new FormControl(5)
  })

  get quantity() {
    return this.form.controls.quantity;
  }

  validate(): void {
    if(this.form.valid) {
      this.quizService.getQuestionsFromApi(this.quantity.value as number);
    }
  }
}
