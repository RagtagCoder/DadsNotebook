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

  constructor() { }

  ngOnInit() {
    this.articles = this.getLastNElements(getIndexOfArticles(), 5);
  }

  parseDateString(date: Date): string {
    return formatDate(date, 'MMMM dd yyyy', 'en-US');
  }

  // Function to get the last N elements from an array
  getLastNElements<T>(arr: T[], n: number): T[] {
    if (!Array.isArray(arr)) {
      throw new Error("First argument must be an array");
    }
    if (typeof n !== "number" || n < 0) {
      throw new Error("Number of elements must be a non-negative integer");
    }
    // slice(-n) returns the last n elements; handles n > arr.length automatically
    return arr.slice(-n);
  }

}
