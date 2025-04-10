import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PurpleFenixApi } from '../../services/purplefenixapi';

export interface Articles {
  id: number;
  heading: string;
  subheading: string;
  dateCreated: Date;
  author: string;
  content: string
}

@Component({
  selector: 'main-window',
  imports: [RouterOutlet],
  templateUrl: './mainWindow.component.html',
})

export class MainWindowComponent {
  articles: Articles[] = [];
  errorMessage!: string;

  constructor(private service: PurpleFenixApi) {}
  title = 'TheBlog';

  ngOnInit() {
    this.service.getAllPosts().subscribe({
      next: (response) => {
        this.articles = response;
        console.log(this.articles);
      },
      error: (error) => {
        this.errorMessage = error;
      },
    });
  }
}