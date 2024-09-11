export type Question = {
  id: number;
  question: string;
  answers: Answer[];
}

type Answer = {
  answer: string,
  correct: boolean,
}
