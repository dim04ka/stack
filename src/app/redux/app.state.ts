import {Question} from "../question.service";

export interface AppState{
  questPage: {
    questions: Question[],
    metka: object[],
    znaks: object[]
  }
}
