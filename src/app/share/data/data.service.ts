import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
//import 'rxjs/Rx';
//import { Observable } from "rxjs"
import { map } from "rxjs/operators";
import { ClaseItem } from '../modelo'


@Injectable()
export class DataService {

  constructor(private http: Http) { }


  getItemsCatalogo(){
    return this.http.get ('https://basepruebas-6eece.firebaseio.com/Catalogo/.json')
    .pipe(map((response:Response)=>response.json()))
  }

  getUsuarios(){
    return this.http.get ('https://basepruebas-6eece.firebaseio.com/CatalogoUsuario/.json')
    .pipe(map((response:Response)=>response.json()))
  }

  actualizarSaldos(itemsActualizados: ClaseItem[]){
    let datos = JSON.stringify(itemsActualizados);
    return this.http.put('https://basepruebas-6eece.firebaseio.com/Catalogo/.json',datos).pipe(
      map ((response: Response) =>response.json())
    )



  }

}
