import { Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {QuizComponent} from "./pages/quiz/quiz.component";
import {ScoreComponent} from "./pages/score/score.component";

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'quiz', component: QuizComponent},
  {path: 'score', component: ScoreComponent}
];
