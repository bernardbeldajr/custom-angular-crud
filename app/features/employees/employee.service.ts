import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";

const EMPLOYEE_API: string = "https://jsonplaceholder.typicode.com/users";

@Injectable()
export class EmployeeService {
  constructor(private http: Http) {}

  getEmployees(): Observable<any> {
    return this.http
      .get(EMPLOYEE_API)
      .map((response: Response) => response.json());
  }
}
