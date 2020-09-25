import { Component, Input, OnInit } from "@angular/core";
import { EmployeeService } from "../../employee.service";

@Component({
  selector: "employee-record",
  templateUrl: "./employee-record.component.html",
})
export class EmployeeRecordComponent implements OnInit {
  @Input() data;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {}

  handleEdit() {}
}
