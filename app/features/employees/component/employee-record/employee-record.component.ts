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

  handleEdit(event) {
    this.employeeService.updateEmployee(event).subscribe((data) => {
      this.data = this.data.map((employee) => {
        // console.log(employee);
        if (employee.id === event.id) {
          employee = Object.assign({}, employee, event);
        }
        return employee;
      });
    });
  }
}
