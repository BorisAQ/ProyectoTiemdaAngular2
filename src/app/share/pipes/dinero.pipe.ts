import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'estilo'
})
export class DineroPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    //return Math.round(value * 100) / 100;
    return value*2;
  }

}
