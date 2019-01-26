import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemDetalleRouting } from './item-detalle-routing.module'
import { ItemDetalleComponent } from './item-detalle.component';

@NgModule({
  imports: [
    CommonModule,
    ItemDetalleRouting

  ],
  declarations: [ItemDetalleComponent]
})
export class ItemDetalleModule { }
