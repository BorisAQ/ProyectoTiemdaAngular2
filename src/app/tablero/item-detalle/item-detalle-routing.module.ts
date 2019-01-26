import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemDetalleComponent } from './item-detalle.component';

const routes: Routes = [
    {
        path: '',
        component: ItemDetalleComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemDetalleRouting { }
