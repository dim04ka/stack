import { Component, OnInit } from '@angular/core';
import {QuestionInc, QuestionService} from '../question.service'
import {Store} from "@ngrx/store";
import {AppState} from "../redux/app.state";
import {AddQuest} from "../redux/quest.action";
import { Router } from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-quest',
  templateUrl: './create-quest.component.html',
  styleUrls: ['./create-quest.component.scss'],
  providers: [QuestionService]
})
export class CreateQuestComponent implements OnInit {

  form: FormGroup;
  private counter: number;

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private QCounter: QuestionInc
    ) { }

  ngOnInit(): void {
    
    this.counter = this.QCounter.counter;
    //console.log(this.counter)

    this.form = new FormGroup({
      title: new FormControl('',
        [
          Validators.minLength(8),
          Validators.required
        ]
        ),
      disc: new FormControl('',
        [
          Validators.required
        ])
    })
  }

  sendForm() {

    const quest = {
      id: this.counter,
      vote: 12,
      answer: 3,
      impressions: 18,
      title: this.form.value.title ,
      disc: this.form.value.disc,
      tags: ['html', 'js', 'react', 'css3', 'html5', 'scss', 'angular', 'vue'],
      date: new Date(),
      author: `Dim04ka ${this.counter}`,
      authorRating: 298
    };

    this.store.dispatch(new AddQuest(quest));
    this.QCounter.increase();
    this.form.reset();
    this.router.navigate(['/']);

  }

}
