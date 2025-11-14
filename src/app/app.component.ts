import { Component } from '@angular/core';
import { NavbarComponent } from "./components/navigation/navbar.component";
import { MainWindowComponent } from './components/mainWindow/mainWindow.component';
import { PageFooterComponent } from './components/page-footer/page-footer.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-root',
  imports: [ MainWindowComponent, NavbarComponent, PageFooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'TheBlog';
}
