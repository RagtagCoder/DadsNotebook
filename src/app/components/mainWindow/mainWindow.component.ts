import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'main-window',
  imports: [RouterOutlet],
  templateUrl: './mainWindow.component.html',
})

export class MainWindowComponent {
  title = 'TheBlog';

  ngOnInit() {

  }
}