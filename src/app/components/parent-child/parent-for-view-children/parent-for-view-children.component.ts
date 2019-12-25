import {
  Component,
  OnInit,
  ViewChildren,
  QueryList,
  AfterViewInit,
  ViewChild
} from "@angular/core";
import { result, AlbumResult } from "src/app/models/album";
import { AlbumService } from "src/app/services/album.service";
import { ChildForViewChildrenComponent } from "../child-for-view-children/child-for-view-children.component";

@Component({
  selector: "app-parent-for-view-children",
  templateUrl: "./parent-for-view-children.component.html",
  styleUrls: ["./parent-for-view-children.component.css"]
})
export class ParentForViewChildrenComponent implements OnInit, AfterViewInit {
  @ViewChildren(ChildForViewChildrenComponent) children: QueryList<
    ChildForViewChildrenComponent
  >;
  albums: result[];
  message: string;
  constructor(private albumService: AlbumService) {
    console.log("ParentForViewChildrenComponent constructor is working.");
  }

  ngOnInit() {
    this.albumService.getAllSingle().subscribe(res => {
      this.albums = (res as AlbumResult).result;
    });
  }

  ngAfterViewInit() {
    console.log(
      "ParentForViewChildrenComponent ngAfterViewInit ngAfterViewInit is working."
    );
    // console.log(
    //   `ParentForViewChildrenComponent ngAfterViewInit children: ${this.children}`
    // );
    // this.children.forEach(item => {
    //   console.log(`item: ${item}`);
    // });
  }
}
