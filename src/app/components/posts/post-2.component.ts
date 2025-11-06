import { Component } from '@angular/core';
import { OrdinalDatePipe } from "../../utilities/pipes";
import { Article } from '../../models/article';
import { getIndexOfArticles } from '../../utilities/post-index';
import { formatDate } from '@angular/common';

@Component({
    selector: 'post-2',
    templateUrl: './post-2.component.html',
    imports: [OrdinalDatePipe],
})
export class PostTwoComponent {
      article: Article;
    title = 'PostTwo';

  constructor() {
    const articles: Article[] = getIndexOfArticles();
    for (let art of articles) {
      if (art.id == 'post-2') {
        this.article = art;
      }
    }
  }

  parseDateString(date: Date): string {
    return formatDate(date,'MMMM dd yyyy','en-US');
  }
}
