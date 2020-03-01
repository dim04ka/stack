import { Component, OnInit, DoCheck} from '@angular/core';
import {Question, QuestionService, QuestSearch} from '../question.service';
import {Store} from "@ngrx/store";
import {AppState} from "../redux/app.state";
import {Observable} from "rxjs";
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-create-quest',
  templateUrl: './view-create-quest.component.html',
  styleUrls: ['./view-create-quest.component.scss']
})
export class ViewCreateQuestComponent implements OnInit, DoCheck {

  public questState: Observable<QuestionService>;
  search: string = '';

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private searchInput: QuestSearch
    ) {
  }

  ngOnInit(): void {
    this.questState = this.store.select('questPage');
  }
  ngDoCheck(): void {
    this.search = this.searchInput.search;
  }

  onSelect(quest: Question) {
    this.router.navigate(['/question', quest.id])
  }

}
