import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableroRoutingModule} from './tablero-routing.module'
import { TableroComponent } from './tablero.component';
import { BarraSuperiorComponent } from '../share';



@NgModule({
  imports: [
    CommonModule,
    TableroRoutingModule
  ],
  declarations: [TableroComponent, BarraSuperiorComponent]
})
export class TableroModule { }
