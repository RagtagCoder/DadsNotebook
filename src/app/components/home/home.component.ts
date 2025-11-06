import { Component } from '@angular/core';
import { Article } from '../../models/article';
import { getIndexOfArticles } from '../../utilities/post-index'
import { PurpleFenixApi } from '../../services/purplefenixapi';
import { formatDate } from '@angular/common';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  title = 'Home';

  articles: Article[] = [];
  errorMessage!: string;

  constructor(private service: PurpleFenixApi) { }

  ngOnInit() {
    this.articles = getIndexOfArticles();
  }

  parseDateString(date: Date): string {
    return formatDate(date,'MMMM dd yyyy','en-US');
  }
}
