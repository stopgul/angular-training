import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { HttpClient } from "@angular/common/http";
//import 'rxjs/add/operator/map';
import { map } from "rxjs/operators";
import { Author } from "../models/author";

@Injectable()
export class AuthorService {
  private readonly authorEndPoint =
    "https://fakerestapi.azurewebsites.net/api/Authors";

  constructor(private http: HttpClient) {}

  getAuthors() {
    return this.http.get<Author[]>(this.authorEndPoint); //.pipe(map(res => res.json()));
  }

  getAuthor(id) {
    return this.http.get(this.authorEndPoint + "/" + id);
    //.pipe(map(res => res.json()))
  }

  create(author) {
    return this.http.post(this.authorEndPoint, author);
    //.pipe(map(res => res.json()) )
  }
}
