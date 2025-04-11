import { Component, Input } from '@angular/core';
import { Article } from '../../../models/article';
import { formatDate } from '@angular/common';

@Component({
  selector: 'post-1',
  templateUrl: './post-1.component.html',
})
export class PostOneComponent {
  @Input() article: Article;
  title = 'PostOne';

  constructor() {
  }

  parseDateString(date: Date): string {
    // Year / month / day
    const splitDate = date.toString().split('T')[0].split('-');
    const formattedDate = new Date(parseInt(splitDate[0]), parseInt(splitDate[1]), parseInt(splitDate[2]));

    return formatDate(formattedDate,'MMM dd yyyy','en-US');
  }
}
