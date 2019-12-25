import { Component, OnInit, Input } from "@angular/core";
import { result } from "src/app/models/album";

@Component({
  selector: "app-child-for-view-children",
  templateUrl: "./child-for-view-children.component.html",
  styleUrls: ["./child-for-view-children.component.css"]
})
export class ChildForViewChildrenComponent implements OnInit {
  @Input() album: result;
  constructor() {
    console.log(`ChildForViewChildrenComponent constructor is working.`);
  }

  ngOnInit() {
    console.log(`ChildForViewChildrenComponent init is working.`);
  }
}
