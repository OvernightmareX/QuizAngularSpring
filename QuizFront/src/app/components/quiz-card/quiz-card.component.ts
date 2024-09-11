import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {Question} from "../../utils/types/question";

@Component({
  selector: 'app-quiz-card[question]',
  standalone: true,
  imports: [],
  templateUrl: './quiz-card.component.html',
  styleUrl: './quiz-card.component.css'
})
export class QuizCardComponent implements OnChanges {
  @Input() question!: Question;
  @Output() answerIsCorrect = new EventEmitter<boolean>();

  hasAnswered: boolean = false;

  ngOnChanges(changes: SimpleChanges) {
    this.hasAnswered = false;
  }

  sendAnswer(event: MouseEvent): void {
    const btnElement = event.target as HTMLButtonElement;
    let index: number = parseInt(btnElement.value);
    this.hasAnswered = true;
    if(this.question.answers[index].correct) {
      // Correct answer
      this.answerIsCorrect.emit(true);
    } else {
      // Wrong answer
      this.answerIsCorrect.emit(false);
      btnElement.classList.add('wrong');
    }
  }
}
