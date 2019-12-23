import { Component, OnInit } from "@angular/core";
import { AlbumService } from "src/app/services/album.service";
import { result, AlbumResult } from "src/app/models/album";

@Component({
  selector: "app-album-list",
  templateUrl: "./album-list.component.html",
  styleUrls: ["./album-list.component.css"]
})
export class AlbumListComponent implements OnInit {
  albumResults: result[];
  constructor(public albumService: AlbumService) {}

  ngOnInit() {
    let albumResult: any;
    this.albumService.getAllSingle().subscribe(res => {
      this.albumResults = (res as AlbumResult).result;
    });
  }
}
