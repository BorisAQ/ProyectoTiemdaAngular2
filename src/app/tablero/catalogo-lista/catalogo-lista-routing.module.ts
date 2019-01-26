import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogoListaComponent } from './catalogo-lista.component';

const routes: Routes = [
    {
        path: '',
        component: CatalogoListaComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogoListaRouting { }
