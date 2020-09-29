import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "employee-data",
  templateUrl: "./employee-data.component.html",
  // styleUrls: ,
})
export class DataEmployeeComponent {
  @Input() detail: any[];
  @Output() update: EventEmitter<any> = new EventEmitter();
  constructor() {}

  editing: boolean = false;
  showMsg: boolean = false;

  toggleUpdate() {
    this.editing = !this.editing;
  }

  toggleMessage() {
    this.showMsg = false;
  }

  onSave(employee, IsValid) {
    if (IsValid) {
      this.update.emit(employee);
      this.toggleUpdate();
      this.showMsg = true;
    }
  }
}
