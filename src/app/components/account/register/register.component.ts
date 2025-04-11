import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'register',
    templateUrl: './register.component.html',
    imports: [ReactiveFormsModule],
})
export class RegisterComponent {
    title = 'Register';
    registerForm = new FormGroup({
        username: new FormControl(''),
        email: new FormControl(''),
        password: new FormControl(''),
        repeatPassword: new FormControl(''),
        subscribe: new FormControl(''),
      });

    updateName() {
        this.registerForm.controls.username.setValue('Owen');
        this.registerForm.controls.email.setValue('some shit email address');
      }
}
