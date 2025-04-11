import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { Article } from "../models/article";
  
  @Injectable({
    providedIn: 'root',
  })
  export class PurpleFenixApi {

  apiUrl = "http://localhost:5182/articles/get-all";

  constructor(private http: HttpClient) {}

  getAllPosts(): Observable<Article[]> {
    return this.http.get<Article[]>(this.apiUrl);
   }
}