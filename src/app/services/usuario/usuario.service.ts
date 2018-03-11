import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Token } from '../../clases/token';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UsuarioService {

  httpOptions = { 
    headers: new HttpHeaders({
      'token':'1123456',
    })
  };

  httpOptions2 = { 
    headers: new HttpHeaders({
      'content-type':'application/json',
    })
  };
//sfadsdfad


  usr:any = {};

  constructor(private http:HttpClient) { }

  getUser(id){
    let url = 'http://localhost:8080/gestorDeTareas/users/'+id;
    return this.http.get(url, this.httpOptions);
  }

  /*setUsuario(usuario){
    //this.usr = JSON.stringify(usuario);
    console.log("llegue a set usuario");
    //this.usr = {"email":"nombre2@email","nombreUsuario":"nombre2","password":"1111"}
    let url = 'http://localhost:8080/entregable4/users';
    return this.http.post(url,{"email":"nombre2@email","nombreUsuario":"nombre2","password":"1111"},this.httpOptions2);
  }*/

  setUsuario(usuario){
    let url = 'http://localhost:8080/gestorDeTareas/users';
    return this.http.post(url,usuario,this.httpOptions2); 
  }

  loginUsuario(usuario){
    let url = 'http://localhost:8080/gestorDeTareas/autenticacion';
    return this.http.post(url,usuario,this.httpOptions2,);
  }

}