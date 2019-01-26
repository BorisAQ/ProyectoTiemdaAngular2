import { Component, OnInit } from '@angular/core';

import { ClaseItem} from '../../share/modelo';
import { Router  } from '@angular/router';

@Component({
  selector: 'app-item-detalle',
  templateUrl: './item-detalle.component.html',
  styleUrls: ['./item-detalle.component.css']
})
export class ItemDetalleComponent implements OnInit {
  item: ClaseItem;

  constructor(private router:Router) {

  }

  ngOnInit() {

    this.item = JSON.parse(localStorage.getItem("itemEdit"));
    /*this.item = new ClaseItem();
    this.item.nombre = "Aguacate"
    this.item.cantidad=99;
    this.item.precio = 5.5;
    this.item.imagen = "aguacate.jpg";*/

  }

  onVolver(){
      this.router.navigate(['tablero','catalogo-lista']);
  }
}
