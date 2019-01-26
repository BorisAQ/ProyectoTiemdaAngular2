import { Component, OnInit } from '@angular/core';
import { ItemDataService ,BarService} from '../../share/data';
import { ClaseItem } from '../../share/modelo';
import { Router  } from '@angular/router';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css'],

})
export class CarritoComponent implements OnInit {
  itemsCarrito : ClaseItem[];
  totalCarrito: Number;
  constructor(private itemData: ItemDataService, private router:Router, private bs:BarService) { }

  ngOnInit() {
    this.itemsCarrito = this.itemData.itemsCarritoCompras;
    this.totalCarrito = this.itemData.totalCarritoCompras();
  }

  onPagar(){
    
    this.itemData.actualizarItems();


    this.itemData.initData();



    this.router.navigate(['tablero','catalogo-lista']);
    this.bs.change();
  }






  onCancelar(){
    this.router.navigate(['tablero','catalogo-lista']);
  }

}
