import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
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
  form: FormGroup;

  username: string = '';
  email: string = '';
  password: string = '';
  repeatPassword: string = '';
  subscribe: boolean = false;


  constructor(private service: PurpleFenixApi, private fb: FormBuilder) {
    this._api = service;

    this.form = this.fb.group({
      username: [this.username, [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
      email: [this.email, [Validators.required, Validators.email]],
      password: [this.password, [Validators.required, Validators.minLength(8), Validators.maxLength(250)]],
      repeatPassword: [this.repeatPassword, [Validators.required, Validators.minLength(8), Validators.maxLength(250)], this.password === this.repeatPassword],
      subscribe: [this.subscribe],
    });
  }

  async registerNewUser() {
    //check details
    const passwordsMatch = this.password === this.repeatPassword;
    const usernameIsUnique = await this._api.usernameIsUnique(this.username);


    if (passwordsMatch && usernameIsUnique) {
      const user: AccountData = {
        username: this.username,
        emailAddress: this.email,
        password: this.password,
        dateCreated: new Date(),
        isOnMailingList: this.subscribe
      };
      await this._api.createUser(user);
    }
  }

  passwordsMatch(accountData: AccountData): boolean {
    if (accountData.password !== this.repeatPassword) {
      return false;
    } else {
      return true;
    }
  }
}
