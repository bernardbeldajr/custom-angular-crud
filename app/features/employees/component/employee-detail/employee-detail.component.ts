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
  company_name = "";

  editing = false;

  ngOnInit() {
    this.name = this.detail.name;
    this.email = this.detail.email;
    this.phone = this.detail.phone;
    this.company_name = this.detail.company.name;
  }

  toggleUpdate() {
    this.editing = !this.editing;
  }

  onSave() {
    this.detail.name = this.name;
    this.detail.email = this.email;
    this.detail.phone = this.phone;
    this.detail.company.name = this.company_name;

    this.edit.emit(this.detail);
  }
}
