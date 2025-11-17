import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreatePageVisitRequest } from "../utilities/page-visit";
import { AccountData } from "../models/account-data";
import { LoginRequest } from "../models/loginRequest";

@Injectable({
  providedIn: 'root',
})
export class PurpleFenixApi {

  baseUrl = "http://localhost:5182";

  constructor(private http: HttpClient) { }

  async sendPageVisitLog(sourcePage: string): Promise<any> {
    const request = CreatePageVisitRequest(sourcePage);

    this.http.post(`${this.baseUrl}/visit/get-total`, request).subscribe({
      next: (response) => { return response },
      error: (error) => { return error }
    });
  }

  async createUser(user: AccountData): Promise<any> {
    this.http.post(`${this.baseUrl}/user/new-user`, user).subscribe({
      next: (response) => { return response },
      error: (error) => { return error }
    });
  }


  async getAuthToken(loginRequest: LoginRequest): Promise<any> {
    this.http.post(`${this.baseUrl}/user/login`, loginRequest).subscribe({
      next: (response) => { return response },
      error: (error) => { return error }
    });
  }
}

