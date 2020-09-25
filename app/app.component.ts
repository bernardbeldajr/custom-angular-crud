import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  styleUrls: ["app.component.scss"],
  template: `
    <nav-header></nav-header>
    <div class="app">
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent {}
