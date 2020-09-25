import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "customFilter",
})
export class SearchEmployeePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter((val) => {
      let rVal =
        val.email.toLocaleLowerCase().includes(args) ||
        val.name.toLocaleLowerCase().includes(args) ||
        val.phone.toLocaleLowerCase().includes(args) ||
        val.company.name.toLocaleLowerCase().includes(args);
      return rVal;
    });
  }
}
