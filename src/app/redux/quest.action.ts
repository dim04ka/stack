import {Action} from "@ngrx/store";
import {Question, QuestionInc} from "../question.service";
import {FormControl} from "@angular/forms";

export namespace QUEST_ACTION {
  export const ADD_QUEST = 'ADD_QUEST';
  export const DELETE_QUEST = 'DELETE_QUEST';
}

export class AddQuest implements Action {
  readonly type = QUEST_ACTION.ADD_QUEST;

  constructor(public payload: { date: Date; answer: number; authorRating: number; author: string; disc: FormControl | FormControl | any | string | string | any; id: number; impressions: number; title: any; vote: number; tags: string[] }) {}
}

export class DeleteQuest implements Action {
  readonly type = QUEST_ACTION.DELETE_QUEST;
  constructor(public payload) { }
}
