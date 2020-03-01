import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../redux/app.state";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public metka;
  public znaks;

  constructor(private store: Store<AppState>) { }
  ngOnInit(): void {

    this.metka = this.store.select('questPage')
    this.metka.subscribe(data => {
        this.metka = data.metka;
        this.znaks = data.znaks
      });
  }

}
