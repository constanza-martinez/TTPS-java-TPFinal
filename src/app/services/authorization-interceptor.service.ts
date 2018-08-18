import { Injectable } from '@angular/core';
import { StorageService } from './storage/storage.service';
import { Observable } from 'rxjs/Observable';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';

@Injectable()
export class AuthorizationInterceptorService {

  constructor(private auth:StorageService) { }

  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Obtenemos el token
    let token = '';
    if(this.auth.getLocalStorage("token")!=null){
      token = this.auth.getLocalStorage("token");
    } 
    // Importante: modificamos de forma inmutable, haciendo el clonado de la petición
    const authReq = req.clone({headers: req.headers.set('Authorization', token)});
    // Pasamos al siguiente interceptor de la cadena la petición modificada
    return next.handle(authReq);
  }

}
