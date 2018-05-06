import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Token } from '../../clases/token';
import { Observable } from 'rxjs/Observable';
import { StorageService } from '../storage/storage.service';


//ofrece el servicio de operar sobre los usuarios, conectándose al api rest que hicimos. Tanto este servicio como los demás
//se pueden inyectar en los componentes a través de su constructor, pero antes deben ser declarados
//en la sección de providers del app.module (para que sea reconocida por todos los componentes) O en el módulo
//de un componente en específico.

@Injectable()
export class UsuarioService {
  constructor(private http:HttpClient, private auth: StorageService){}

  httpOptions = { 
    headers: new HttpHeaders({
      'content-type':'application/json',
    })
  };



  httpOptions2 = { 
    headers: new HttpHeaders({
      'content-type':'application/json',
    })
  };
//sfadsdfad


  usr:any = {};

  //constructor(private http:HttpClient) { }


  //las operaciones de http retornan observables, que sirven para que el navegador siga ejecutandose sin
  //tener que esperar que la solicitud sea contestada


  getUser(id){
    let url = 'http://localhost:8080/gestorDeTareas/users/'+id;
    return this.http.get(url,this.httpOptions);
  }

  misDatos(){
    let url = 'http://localhost:8080/gestorDeTareas/user';
    return this.http.get(url,this.httpOptions);
  }

  setUsuario(usuario){
    let url = 'http://localhost:8080/gestorDeTareas/users';
    return this.http.post(url,usuario,this.httpOptions2); 
  }

  loginUsuario(usuario){
    let url = 'http://localhost:8080/gestorDeTareas/autenticacion';
    return this.http.post(url,usuario,this.httpOptions2);
    
  }

}