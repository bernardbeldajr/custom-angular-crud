import { Component } from "@angular/core";

@Component({
  selector: "not-found",
  template: `
    <section>
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            <h1>Opps! Page is not Found!</h1>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class NotFoundComponent {}
