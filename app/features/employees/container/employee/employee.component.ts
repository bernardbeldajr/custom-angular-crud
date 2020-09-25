import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "../../employee.service";

@Component({
  selector: "employee-item",
  templateUrl: "employee.component.html",
})
export class EmployeeComponent implements OnInit {
  users: any[];
  constructor(private employeeService: EmployeeService) {}
  ngOnInit() {
    this.employeeService.getEmployees().subscribe((data) => {
      this.users = data;
    });
  }
}
