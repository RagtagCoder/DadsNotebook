import { Component } from '@angular/core';
import { Article } from '../../models/article';
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
    this.service.getAllPosts().subscribe({
      next: (response) => {
        this.articles = response;
      },
      error: (error) => {
        this.errorMessage = error;
      },
    });
  }

  parseDateString(date: Date): string {
    // Year / month / day
    const splitDate = date.toString().split('T')[0].split('-');
    const formattedDate = new Date(parseInt(splitDate[0]), parseInt(splitDate[1]), parseInt(splitDate[2]));

    return formatDate(formattedDate,'MMM dd yyyy','en-US');
  }
}
