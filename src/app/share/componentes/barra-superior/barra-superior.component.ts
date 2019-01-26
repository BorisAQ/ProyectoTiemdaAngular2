import { Component, OnInit } from '@angular/core';
import { Router  } from '@angular/router';

import { BarService } from '../../data'
@Component({
  selector: 'app-barra-superior',
  templateUrl: './barra-superior.component.html',
  styleUrls: ['./barra-superior.component.css']
})
export class BarraSuperiorComponent implements OnInit {


  constructor(private router:Router, private ss:BarService) { }
  canastaitems: number;

  ngOnInit() {
    //this.canastaitems = this.itemData.itemsCarritoCompras.length;
    this.ss.getEmittedValue().subscribe(item=> {
        if (item!=0){
          this.canastaitems = item;
        }else{

        }
    });

  }

  clickCarrito(){
    this.router.navigate(['tablero','carrito']);
  }
  clickPrincipal(){
    this.router.navigate(['tablero','catalogo-lista']);
  }

  clickCerrarSesion(){
    this.router.navigate(['']);
  }


}
