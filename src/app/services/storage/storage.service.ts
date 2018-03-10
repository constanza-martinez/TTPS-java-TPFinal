import { Injectable } from '@angular/core';

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
