import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'contact',
    templateUrl: './contact.component.html',
    imports: [
      ReactiveFormsModule,
      MatFormField,
      MatFormFieldModule,
      MatInputModule,
      MatSlideToggleModule,
      MatButtonModule],
})
export class ContactComponent {
  title = 'Contact';
  contactForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    message: new FormControl(''),
  });

  submitMessage() {
  }
}
