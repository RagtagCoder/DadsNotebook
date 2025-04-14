import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'register',
    templateUrl: './register.component.html',
    imports: [
      ReactiveFormsModule,
      MatFormField,
      MatFormFieldModule,
      MatInputModule,
      MatSlideToggleModule,
      MatButtonModule],
})
export class RegisterComponent {
    title = 'Register';
    registerForm = new FormGroup({
        firstName: new FormControl(''),
        lastName: new FormControl(''),
        username: new FormControl(''),
        email: new FormControl(''),
        password: new FormControl(''),
        repeatPassword: new FormControl(''),
        subscribe: new FormControl('true'),
      });

    registerNewUser() {
      }
}
