import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { Routes, RouterModule } from "@angular/router";

import { EmployeeService } from "./employee.service";

import { EmployeeComponent } from "./container/employee/employee.component";
import { EmployeeRecordComponent } from "./component/employee-record/employee-record.component";
import { EmployeeDetail } from "./component/employee-detail/employee-detail.component";

const routes: Routes = [
  {
    path: "employee",
    children: [{ path: "", component: EmployeeComponent }],
  },
];

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    HttpModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [EmployeeComponent, EmployeeRecordComponent, EmployeeDetail],
  providers: [EmployeeService],
})
export class EmployeeModule {}
