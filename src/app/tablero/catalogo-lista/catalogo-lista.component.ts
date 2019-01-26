import { Component, OnInit } from '@angular/core';

import { DataService, ItemDataService, BarService} from '../../share/data';
import { ClaseItem} from '../../share/modelo';
import { FormGroup, FormControl} from '@angular/forms';
import { Router  } from '@angular/router';



@Component({
  selector: 'app-catalogo-lista',
  templateUrl: './catalogo-lista.component.html',
  styleUrls: ['./catalogo-lista.component.css']
})
export class CatalogoListaComponent implements OnInit {

  items: ClaseItem[]=[];
  formularioBusqueda: FormGroup;
  formularioItem: FormGroup;
  cadenaBusqueda: string;
  cantidadMinima: number;
  constructor(private data:DataService, private dataItem:ItemDataService,private router:Router, private bs:BarService) { }

  ngOnInit() {
    /*
    this.data.getItemsCatalogo()
       .subscribe(
         (data) => {
           this.items = data;

         }
       )
       */



    this.formularioBusqueda = new FormGroup({
             'fcn_busqueda':new FormControl()

           });
    this.formularioItem = new FormGroup({
      'fcn_add_item': new FormControl()
    });
    this.cadenaBusqueda="";
    this.actualizar();
    this.cantidadMinima= 1;
    
  }

  actualizar(){
    this.items = this.dataItem.busqueda(this.cadenaBusqueda);
    this.cantidadMinima= 1;
  }
  onBusqueda(){
    this.cadenaBusqueda=this.formularioBusqueda.value.fcn_busqueda;
    this.actualizar()

  }

  verItem( item:ClaseItem):void{
    console.log(item)
    localStorage.removeItem("itemEdit");
    localStorage.setItem("itemEdit",JSON.stringify(item));

    this.router.navigate(['tablero','item-detalle']);

  }

  anadirItem(item:ClaseItem):void{


    if (item.cantidad>= this.formularioItem.value.fcn_add_item ){
      let itemSeleccionado:ClaseItem = new ClaseItem();
      itemSeleccionado.id= item.id;
      itemSeleccionado.cantidad= this.formularioItem.value.fcn_add_item ;
      itemSeleccionado.nombre= item.nombre;
      itemSeleccionado.imagen = item.imagen;
      itemSeleccionado.precio = item.precio;
      this.dataItem.seleccion(itemSeleccionado);

      this.bs.change();
      this.actualizar();
    }

  }
}
