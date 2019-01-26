import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mon'
})
export class MonPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return 2*value;
  }

}
