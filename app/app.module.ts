import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { EmployeeModule } from "./features/employees/employee.module";

import { AppComponent } from "./app.component";
import { NotFoundComponent } from "./not-found.component";
import { HomepageComponent } from "./homepage.component";

import { NavigationHeader } from "./shared/nav-header/nav-header.component";

const routes: Routes = [
  { path: "", component: HomepageComponent, pathMatch: "full" },
  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    EmployeeModule,
    RouterModule.forRoot(routes),
  ],
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    NotFoundComponent,
    HomepageComponent,
    NavigationHeader,
  ],
})
export class AppModule {}
