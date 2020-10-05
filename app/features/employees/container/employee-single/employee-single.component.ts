import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { EmployeeService } from "../../employee.service";

import "rxjs/add/operator/switchMap";

@Component({
  selector: "employee-single",
  templateUrl: "./employee-single.component.html",
})
export class SingleEmployeeComponent implements OnInit {
  employees: any[];

  constructor(
    private router: Router,
    private employeeService: EmployeeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params
      .switchMap((data) => {
        console.log(data["id"]);
        return this.employeeService.getEmployee(data["id"]);
      })
      .subscribe((data) => (this.employees = data));
  }

  handleUpdate(event) {
    console.log(event);
    this.employeeService.updateEmployee(event).subscribe((data) => {
      // console.log(data);
      return (this.employees = data);
    });
  }
}
