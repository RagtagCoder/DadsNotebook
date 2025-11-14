import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { AppComponent } from './app.component';
import { MainWindowComponent } from './components/mainWindow/mainWindow.component';
import { NavbarComponent } from './components/navigation/navbar.component';
import { PageFooterComponent } from './components/page-footer/page-footer.component';

@NgModule({
  declarations: [],
  imports: [
    AppComponent,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MainWindowComponent, 
    NavbarComponent, 
    PageFooterComponent, 
    MatFormFieldModule
  ],
  providers: []
})
export class AppModule { }