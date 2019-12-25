import { Component, OnInit, AfterViewInit, ViewChild } from "@angular/core";
import { ChildForViewChildComponent } from "../child-for-view-child/child-for-view-child.component";

@Component({
  selector: "app-parent-for-view-child",
  templateUrl: "./parent-for-view-child.component.html",
  styleUrls: ["./parent-for-view-child.component.css"]
})
export class ParentForViewChildComponent implements OnInit, AfterViewInit {
  @ViewChild(ChildForViewChildComponent) child: ChildForViewChildComponent;
  messageInParent: string;
  constructor() {
    console.log("ParentForViewChildComponent constructor is working.");
  }

  ngOnInit() {
    this.messageInParent = "message is changed by parent.";
  }

  ngAfterViewInit() {
    console.log("ParentComponent ngAfterViewInit ngAfterViewInit is working.");
    console.log(
      `ParentComponent ngAfterViewInit viewChildMessage: ${this.child.message}`
    );
    //this.child.message = "Passed as View Child";
    //this.children.forEach(t => console.log("aaaa:" + t.album.title));
  }
}
