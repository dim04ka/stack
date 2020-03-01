import {Injectable} from "@angular/core";

export interface Question {
  id: number;
  vote: number;
  answer: number;
  impressions: number;
  title: string;
  disc: string;
  tags: string[];
  date?: any;
  author: string;
  authorRating: number;
}

export class QuestionService {
  questions: Question[];

}


@Injectable({
  providedIn: 'root'
})
export class QuestionInc {
  counter = 10;
  increase() {
    this.counter++
  }
}


@Injectable({
  providedIn: 'root'
})
export class QuestSearch {
  search : string = '';

  setSearch(str) {
    this.search = str
  }

}
