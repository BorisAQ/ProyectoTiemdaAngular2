import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogoListaRouting } from './catalogo-lista-routing.module'
import { CatalogoListaComponent } from './catalogo-lista.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    CatalogoListaRouting,
    ReactiveFormsModule
  ],
  declarations: [CatalogoListaComponent]
  //providers:[ItemDataService, DataService]
})
export class CatalogoListaModule { }
