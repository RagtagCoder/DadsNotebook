import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Article } from '../../models/article';
import { PaginationData } from '../../models/pagination-data';
import { formatDate, NgIf } from '@angular/common';
import { getAllArticles, getPageOfArticles } from '../../utilities/post-index';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, NgIf]
})

export class SearchComponent {
    pageData: PaginationData;
    articles: Article[] = [];
    pageNumber: number = 0;
    totalPages: number = 0;
    articlesPerPage = 3;
    errorMessage!: string;

  searchForm = new FormGroup({
    searchBar: new FormControl('')
  });

  search(): Article[] {
    this.pageData = getPageOfArticles(this.searchForm.controls.searchBar.value, 1, this.articlesPerPage);
    this.articles = this.pageData.items;
    this.pageNumber = this.pageData.currentPage;
    this.totalPages = this.pageData.totalPages;
    return this.articles;
  }

  previousPage(): void {
    this.pageNumber--;
    this.pageData = getPageOfArticles(this.searchForm.controls.searchBar.value, this.pageNumber, this.articlesPerPage);
    this.articles = this.pageData.items;
  }

  nextPage(): void {
    this.pageNumber++;
    this.pageData = getPageOfArticles(this.searchForm.controls.searchBar.value, this.pageNumber, this.articlesPerPage);
    this.articles = this.pageData.items;
  }

  parseDateString(date: Date): string {
    return formatDate(date, 'MMMM dd yyyy', 'en-US');
  }

  setUrlForArticle(url: string): string {
    return `/articles/${url}`;
  }

}
