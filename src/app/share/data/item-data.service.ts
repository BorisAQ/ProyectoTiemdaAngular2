import { Injectable } from '@angular/core';
import { DataService }from './data.service'

import { ClaseItem } from '../modelo'

@Injectable()
export class ItemDataService {
  items:ClaseItem[];
  itemsCarritoCompras:ClaseItem[];

  constructor(private data:DataService) { }

    initData(){


   this.data.getItemsCatalogo()
        .subscribe(
          (data) => {
            this.items = data;
            this.itemsCarritoCompras=[];
          }
        );


    }

    busqueda(criterio:string) {
      let itemsBusqueda:ClaseItem[]= [];
      this.items.forEach(
        elemento => {

          if (elemento!=null){
            if (elemento.nombre.toLowerCase().indexOf(criterio.toLowerCase())>-1){
              itemsBusqueda.push(elemento);
            }
          }
        }
      );
      return itemsBusqueda;
    }


    seleccion(itemSeleccionado:ClaseItem){
      //Actualiza la lista del catalogo local
      let itemCatalogoLocal:ClaseItem[]= [];
      let itemCarritoComprasNuevo: ClaseItem[]=[];
      this.items.forEach(
        elemento => {
          if (elemento!=null){

            if (elemento.id == itemSeleccionado.id){


              elemento.cantidad = elemento.cantidad - itemSeleccionado.cantidad;
            }
            itemCatalogoLocal.push(elemento);
          }
        }
      );
      this.items = itemCatalogoLocal;
      //Actualiza la lista del carrito de compras

      this.itemsCarritoCompras.forEach(
        elemento => {
          if (elemento!=null){
            if (elemento.id == itemSeleccionado.id){
              elemento.cantidad = elemento.cantidad + itemSeleccionado.cantidad;
              itemSeleccionado.id =-1;
            }
            itemCarritoComprasNuevo.push(elemento);
          }
        }
      );
      if (itemSeleccionado.id != -1){
        itemCarritoComprasNuevo.push(itemSeleccionado);
      }
      this.itemsCarritoCompras = itemCarritoComprasNuevo;



    }

    totalCarritoCompras():number{
      let total:number;
      total= 0;
      this.itemsCarritoCompras.forEach(
        elemento => {
          if (elemento!=null){
            total = total +elemento.precio * elemento.cantidad;
          }
        }
      );
      return total;
    }

    actualizarItems(){
      this.data.actualizarSaldos(this.items).
        subscribe(
          (data:Response) => console.log (data)
        )
    }




}
