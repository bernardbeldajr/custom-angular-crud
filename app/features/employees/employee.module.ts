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
import { DataEmployeeComponent } from "./component/employee-data/employee-data.component";
import { SingleEmployeeComponent } from "./container/employee-single/employee-single.component";

import { SearchEmployeePipe } from "./component/employee-record/employee-record.pipe";

const routes: Routes = [
  {
    path: "employee",
    children: [
      { path: "", component: EmployeeComponent },
      { path: ":id", component: SingleEmployeeComponent },
    ],
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
  declarations: [
    EmployeeComponent,
    EmployeeRecordComponent,
    EmployeeDetail,
    SearchEmployeePipe,
    DataEmployeeComponent,
    SingleEmployeeComponent,
  ],
  providers: [EmployeeService],
})
export class EmployeeModule {}
