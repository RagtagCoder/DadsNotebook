import { Component, Input } from '@angular/core';
import { Article } from '../../models/article';
import { formatDate } from '@angular/common';
import { getArticleById } from '../../utilities/post-index';
import { OrdinalDatePipe } from "../../utilities/pipes";

@Component({
  selector: 'post-3',
  templateUrl: './post-3.component.html',
  imports: [OrdinalDatePipe],
})
export class PostOneComponent {
  article: Article;
  title = 'PostOne';

  constructor() {
      const article: Article = getArticleById(2);
    }

  parseDateString(date: Date): string {
    return formatDate(date,'MMMM dd yyyy','en-US');
  }
}
