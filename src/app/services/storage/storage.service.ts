import { Injectable } from '@angular/core';
//ofrece el servicio de operar sobre el localStorage. Tanto este servicio como los demás
//se pueden inyectar en los componentes a través de su constructor, pero antes deben ser declarados
//en la sección de providers del app.module (para que sea reconocida por todos los componentes) O en el módulo
//de un componente en específico.
@Injectable()
export class StorageService {

  constructor() { }

  getLocalStorage(clave:string):string{
    return localStorage.getItem(clave);
  }

  setLocalStorage(clave:string,valor:string){
    localStorage.setItem(clave,valor);
  }

  deleteLocalStorage(clave:string){
    localStorage.removeItem(clave);
  }

}
