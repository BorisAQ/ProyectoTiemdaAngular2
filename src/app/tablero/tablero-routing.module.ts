import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableroComponent } from './tablero.component';

const routes: Routes = [
    { path: '',
      component: TableroComponent,
      children:[
        { path: 'catalogo-lista', loadChildren: './catalogo-lista/catalogo-lista.module#CatalogoListaModule' },
        { path: 'item-detalle', loadChildren: './item-detalle/item-detalle.module#ItemDetalleModule' },
        { path: 'carrito', loadChildren: './carrito/carrito.module#CarritoModule' }
      ]

    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TableroRoutingModule { }
