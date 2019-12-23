import { Component, OnInit } from "@angular/core";
import { AuthorService } from "src/app/services/author.service";
import { Author } from "src/app/models/author";

@Component({
  selector: "app-author-list",
  templateUrl: "./author-list.component.html",
  styleUrls: ["./author-list.component.css"]
})
export class AuthorListComponent implements OnInit {
  authors: Author[];

  constructor(public authorService: AuthorService) {}

  ngOnInit() {
    this.getAuthors();
  }

  getAuthors() {
    this.authorService.getAuthors().subscribe(res => (this.authors = res));
  }
}
