import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { AccountData } from '../../../models/account-data';
import { PurpleFenixApi } from '../../../services/purplefenixapi';

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
    _api: PurpleFenixApi;

    registerForm = new FormGroup({
        firstName: new FormControl(''),
        lastName: new FormControl(''),
        username: new FormControl(''),
        email: new FormControl(''),
        password: new FormControl(''),
        repeatPassword: new FormControl(''),
        subscribe: new FormControl('true'),
      });

      constructor(private service: PurpleFenixApi){
        this._api = service;
      }

    registerNewUser() {
      //check details

      // const user: AccountData = {
      //   firstName: this.registerForm.get('firstName')?.value?.toString() as string,
      //   lastname: this.registerForm.get('lastName')?.value?.toString() as string,
      //   emailAddress: this.registerForm.get('email')?.value?.toString() as string,
      //   password: this.registerForm.get('firstName')?.value?.toString() as string,
      //   dateCreated: new Date(),
      //   contactNumber: '999',
      //   isAdmin: false,
      //   isOnMailingList: false,
      //   isOnMessagingList: false
      // };

      const user: AccountData = {
        firstName: 'Owen',
        lastname: 'test',
        emailAddress: 'email@email.com',
        password: 'password',
        dateCreated: new Date(),
        contactNumber: '999',
        isAdmin: false,
        isOnMailingList: false,
        isOnMessagingList: false
      };

        this._api.createUser(user);
      }
}
