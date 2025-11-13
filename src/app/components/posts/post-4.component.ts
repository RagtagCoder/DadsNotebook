import { Component } from '@angular/core';
import { OrdinalDatePipe } from "../../utilities/pipes";
import { Article } from '../../models/article';
import { getArticleById } from '../../utilities/post-index';
import { formatDate } from '@angular/common';

@Component({
    selector: 'post-4',
    templateUrl: './post-4.component.html',
    imports: [OrdinalDatePipe],
})
export class PostTwoComponent {
      article: Article;
    title = 'PostTwo';

  constructor() {
      const article: Article = getArticleById('post-4');
    }

  parseDateString(date: Date): string {
    return formatDate(date,'MMMM dd yyyy','en-US');
  }
}
