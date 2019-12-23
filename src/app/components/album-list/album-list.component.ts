import { Component, OnInit } from "@angular/core";
import { AlbumService } from "src/app/services/album.service";
import { Album, AlbumResult } from "src/app/models/album";

@Component({
  selector: "app-album-list",
  templateUrl: "./album-list.component.html",
  styleUrls: ["./album-list.component.css"]
})
export class AlbumListComponent implements OnInit {
  albums: Album[];
  log: any;
  constructor(public albumService: AlbumService) {}

  ngOnInit() {
    let albumResult: any;
    this.albumService.getAll().subscribe(res => {
      console.log("aa" + JSON.stringify(res));
      albumResult = res;
    });
    this.log = albumResult;
    console.log("1");
    console.log(this.log);
    //this.albums = (albumResult as AlbumResult).result as Album[];
  }
}
