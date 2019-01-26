import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css']
})
export class TableroComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.body.classList.remove('bg-img');
    document.body.classList.add('bg-tablero');
  }

}
