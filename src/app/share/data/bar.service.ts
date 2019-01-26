import { Injectable,Output,EventEmitter} from '@angular/core'
import { ItemDataService } from './item-data.service'

@Injectable()
export class BarService {

@Output() fire: EventEmitter<any> = new EventEmitter();

 constructor(private dt:ItemDataService) {
   console.log('shared service started');
 }

 change() {
  console.log('change started');
   this.fire.emit(this.dt.itemsCarritoCompras.length);
 }

 getEmittedValue() {
   return this.fire;
 }

}
