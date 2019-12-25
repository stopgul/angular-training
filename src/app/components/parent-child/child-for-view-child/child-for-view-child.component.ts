import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-child-for-view-child",
  templateUrl: "./child-for-view-child.component.html",
  styleUrls: ["./child-for-view-child.component.css"]
})
export class ChildForViewChildComponent implements OnInit {
  @Input() message: string;

  constructor() {
    console.log(
      `ChildForViewChildComponent constructor is working. message: ${this.message}`
    );
  }

  ngOnInit() {
    console.log(
      `ChildForViewChildComponent init is working. message: ${this.message}`
    );
  }
}
