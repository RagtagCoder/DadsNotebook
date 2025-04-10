import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

export interface Articles {
    id: number;
    heading: string;
    subheading: string;
    dateCreated: Date;
    author: string;
    content: string
  }
  
  @Injectable({
    providedIn: 'root',
  })
  export class PurpleFenixApi {

  apiUrl = "http://localhost:5182/articles/get-all";

  constructor(private http: HttpClient) {}

  getAllPosts(): Observable<Articles[]> {
    return this.http.get<Articles[]>(this.apiUrl);
   }
}