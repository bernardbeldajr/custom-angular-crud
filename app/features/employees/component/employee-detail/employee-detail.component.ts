import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "[employee-detail]",
  templateUrl: "./employee-detail.component.html",
})
export class EmployeeDetail implements OnInit {
  @Input() detail;
  @Output() edit: EventEmitter<any> = new EventEmitter();
  @Output() delete: EventEmitter<any> = new EventEmitter();
  constructor() {}

  name = "";
  email = "";
  phone = "";
  company_name = "";
  address_street = "";

  editing = false;

  ngOnInit() {
    this.name = this.detail.name;
    this.email = this.detail.email;
    this.phone = this.detail.phone;
    this.company_name = this.detail.company.name;
    this.address_street = this.detail.address.street;
  }

  toggleUpdate() {
    this.editing = !this.editing;
  }

  onSave() {
    this.detail.name = this.name;
    this.detail.email = this.email;
    this.detail.phone = this.phone;
    this.detail.company.name = this.company_name;
    this.detail.address.street = this.address_street;

    this.edit.emit(this.detail);
  }

  onDelete() {
    this.delete.emit(this.detail);
  }
}
