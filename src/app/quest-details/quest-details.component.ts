import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../redux/app.state';
import { Observable } from 'rxjs';
import { QuestionService } from '../question.service';
import {DeleteQuest} from "../redux/quest.action";

@Component({
  selector: 'app-quest-details',
  templateUrl: './quest-details.component.html',
  styleUrls: ['./quest-details.component.scss']
})
export class QuestDetailsComponent implements OnInit {
  
  public questId: number;
  public questState: Observable<QuestionService>;
  public questDelail;

  constructor(
    private router: ActivatedRoute,
    private routers: Router,
    private store: Store<AppState>
    ) { }

  ngOnInit(): void {
    let id = +(this.router.snapshot.paramMap.get('id'));
    this.questId = id;
    this.questState = this.store.select('questPage');

    this.questState.subscribe(data => this.questDelail = data.questions);

    this.questDelail = this.questDelail.filter(el => el.id === id);
  }

  delete() {
    this.routers.navigate(['/']);
    this.store.dispatch(new DeleteQuest(this.questDelail[0].id))
  }

}







