import { Component, OnInit } from "@angular/core";

@Component({
  selector: "nav-header",
  templateUrl: "./nav-header.component.html",
})
export class NavigationHeader implements OnInit {
  constructor() {}

  ngOnInit() {}

  nav = [
    {
      link: "/",
      name: "Home",
      exact: true,
    },
    {
      link: "/oops",
      name: "404",
      exact: false,
    },
    {
      link: "/employee",
      name: "Employees",
      exact: false,
    },
  ];
}
