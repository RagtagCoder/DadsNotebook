import { Component } from '@angular/core';
import { Article } from '../../models/article';
import { getPageOfArticles } from '../../utilities/post-index'
import { NgIf, formatDate } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { PaginationData } from '../../models/pagination-data';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  imports: [MatInputModule, MatButtonModule, NgIf]
})
export class HomeComponent {
  title = 'Home';

  pageData: PaginationData;
  articles: Article[] = [];
  pageNumber = 1;
  articlesPerPage = 3;
  errorMessage!: string;

  constructor() { }

  ngOnInit() {
    this.pageData = getPageOfArticles(null, this.pageNumber, this.articlesPerPage);
    this.articles = this.pageData.items;
  }

  previousPage(): void {
    this.pageNumber--;
    this.pageData = getPageOfArticles(null, this.pageNumber, this.articlesPerPage);
    this.articles = this.pageData.items;
  }

  nextPage(): void {
    this.pageNumber++;
    this.pageData = getPageOfArticles(null, this.pageNumber, this.articlesPerPage);
    this.articles = this.pageData.items;
  }

  parseDateString(date: Date): string {
    return formatDate(date, 'MMMM dd yyyy', 'en-US');
  }

  setUrlForArticle(url: string): string {
    return `/articles/${url}`;
  }
}
