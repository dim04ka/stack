import { Pipe, PipeTransform } from '@angular/core';
import {Question} from "../question.service";

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(question: Question[], search: string = ''): unknown {
    if (!search.trim()) {
      return question
    }

    return question.filter(quest => {
      return quest.title.toLowerCase().includes(search.toLowerCase())
    })
  }
}

