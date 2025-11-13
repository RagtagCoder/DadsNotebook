import { Component } from '@angular/core';
import { OrdinalDatePipe } from "../../utilities/pipes";
import { Article } from '../../models/article';
import { formatDate } from '@angular/common';
import { getArticleById } from '../../utilities/post-index';

@Component({
    selector: 'post-2',
    templateUrl: './post-2.component.html',
    imports: [OrdinalDatePipe],
})
export class PostTwoComponent {
      article: Article;
    title = 'PostTwo';

  constructor() {
      const article: Article = getArticleById('post-2');
    }

  parseDateString(date: Date): string {
    return formatDate(date,'MMMM dd yyyy','en-US');
  }
}
