import { Component, OnInit, Input } from "@angular/core";
import { AlbumService } from "src/app/services/album.service";
import { result, AlbumResultSingle } from "src/app/models/album";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: "app-album-detail",
  templateUrl: "./album-detail.component.html",
  styleUrls: ["./album-detail.component.css"]
})
export class AlbumDetailComponent implements OnInit {
  @Input() album: result;
  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService
  ) {}

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      if (params["id"] !== undefined) {
        const id = +params["id"];
        this.albumService.get(id).subscribe(res => {
          //this.album = (res as AlbumResult).result[0];
          this.album = ((res as unknown) as AlbumResultSingle).result;
        });
      } else {
        //this.navigated = false;
        this.album = null; //new result();
      }
    });
  }
}
