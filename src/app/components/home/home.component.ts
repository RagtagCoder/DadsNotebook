import { Component } from '@angular/core';
import { Article } from '../../models/article';
import { getPageOfArticles } from '../../utilities/post-index'
import { formatDate } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  imports: [MatInputModule, MatButtonModule]
})
export class HomeComponent {
  title = 'Home';

  articles: Article[] = [];
  pageNumber = 1;
  errorMessage!: string;

  constructor() { }

  ngOnInit() {
    const pageData = getPageOfArticles(this.pageNumber, 1);
    this.articles = pageData.items;
  }

  public nextPage(event: Event): void {
    event.stopPropagation();
    this.pageNumber++;
    const pageData = getPageOfArticles(this.pageNumber, 1);
    this.articles = pageData.items;
  }

  parseDateString(date: Date): string {
    return formatDate(date, 'MMMM dd yyyy', 'en-US');
  }
}
