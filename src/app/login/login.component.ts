import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { ItemDataService , DataService} from '../share/data'
import {Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formulario:FormGroup;
  autorizado:boolean;

  constructor(private dataService: ItemDataService, private data:DataService, private router:Router) { }

  ngOnInit() {

      document.body.classList.remove('bg-tablero');
      document.body.classList.add('bg-img');
      this.formulario = new FormGroup({
        'fcn_idusuario':new FormControl("",[
            Validators.required,
            Validators.pattern("[^ @]*@[^ @]*[^ .]*")
        ]),
        'fcn_password':new FormControl("",Validators.required)
      });
      this.dataService.initData()
      this.autorizado= false;
  }


  onSubmit(){

    
    this.data.getUsuarios().
      subscribe(
        data =>{
            data.forEach(
              usuario => {
                if (usuario.usuario == this.formulario.value.fcn_idusuario && usuario.password == this.formulario.value.fcn_password){



                    this.router.navigate(['tablero','catalogo-lista']);

                }else{
                  this.autorizado= true;
                }
              }
            );
        }
      );

    //console.log(this.formulario);
  }
}
