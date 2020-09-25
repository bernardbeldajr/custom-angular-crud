import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "[employee-detail]",
  templateUrl: "./employee-detail.component.html",
})
export class EmployeeDetail implements OnInit {
  @Input() detail;
  @Output() edit: EventEmitter<any> = new EventEmitter();
  constructor() {}

  name = "";
  email = "";
  phone = "";

  editing = false;

  ngOnInit() {
    this.name = this.detail.name;
    this.email = this.detail.email;
    this.phone = this.detail.phone;
  }

  toggleUpdate() {
    this.editing = !this.editing;
  }
}
