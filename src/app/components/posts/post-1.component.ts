import { Component, Input } from '@angular/core';
import { Article } from '../../models/article';
import { formatDate } from '@angular/common';
import { getIndexOfArticles } from '../../utilities/post-index';
import { OrdinalDatePipe } from "../../utilities/pipes";

@Component({
  selector: 'post-1',
  templateUrl: './post-1.component.html',
  imports: [OrdinalDatePipe],
})
export class PostOneComponent {
  article: Article;
  title = 'PostOne';

  constructor() {
    const articles: Article[] = getIndexOfArticles();
    for (let art of articles) {
      if (art.id == 'post-1') {
        this.article = art;
      }
    }
  }

  parseDateString(date: Date): string {
    return formatDate(date,'MMMM dd yyyy','en-US');
  }
}
