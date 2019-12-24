import { Component, OnInit, Input } from "@angular/core";
import { AlbumService } from "src/app/services/album.service";
import { result, AlbumResult } from "src/app/models/album";
import { Router } from "@angular/router";

@Component({
  selector: "app-album-list",
  templateUrl: "./album-list.component.html",
  styleUrls: ["./album-list.component.css"]
})
export class AlbumListComponent implements OnInit {
  albumResults: result[];
  selectedAlbum: result;
  constructor(public albumService: AlbumService, private router: Router) {}

  ngOnInit() {
    let albumResult: any;
    this.albumService.getAllSingle().subscribe(res => {
      this.albumResults = (res as AlbumResult).result;
    });
  }

  onSelect(album: result) {
    this.selectedAlbum = album;
  }

  gotoDetail(): void {
    this.router.navigate(["/album", this.selectedAlbum.id]);
  }
}
