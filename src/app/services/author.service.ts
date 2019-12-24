import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
//import 'rxjs/add/operator/map';
import { Author } from "../models/author";
import { DataService } from "./data.service";

@Injectable()
export class AuthorService extends DataService<Author> {
  constructor(http: HttpClient) {
    super("https://fakerestapi.azurewebsites.net/api/Authors", http);
  }
  //constructor(private http: HttpClient) {}

  // getAuthors2() {
  //   return this.http.get<Author[]>(this.authorEndPoint); //.pipe(map(res => res.json()));
  // }

  // getAuthor(id) {
  //   return this.http.get(this.authorEndPoint + "/" + id);
  //   //.pipe(map(res => res.json()))
  // }

  // create(author) {
  //   return this.http.post(this.authorEndPoint, author);
  //   //.pipe(map(res => res.json()) )
  // }
}
