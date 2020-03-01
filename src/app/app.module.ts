import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { CreateQuestComponent } from './create-quest/create-quest.component';
import { ViewCreateQuestComponent } from './view-create-quest/view-create-quest.component';
import {RouterModule} from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {StoreModule} from "@ngrx/store";
import questReducer from "./redux/quest.reducer";
import { NotFoundComponent } from './not-found/not-found.component';
import { QuestDetailsComponent } from './quest-details/quest-details.component';
import { FilterPipe } from './pipes/filter.pipe';
import {QuillModule, QuillModules} from "ngx-quill";


const routes = [
  {path: '', component: ViewCreateQuestComponent },
  {path: 'create', component: CreateQuestComponent },
  {path: 'question/:id', component: QuestDetailsComponent },
  {path: 'error', component: NotFoundComponent } ,
  {path: '**', redirectTo: '/error'}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    CreateQuestComponent,
    ViewCreateQuestComponent,
    NotFoundComponent,
    QuestDetailsComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({questPage: questReducer}),
    QuillModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
