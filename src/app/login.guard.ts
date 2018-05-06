import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
//ARCHIVO QUE SIRVE PARA EVITAR QUE SE ENTREN A PAGINAS SI NO SE ESTA LOGUEADO
@Injectable()
export class LoginGuard implements CanActivate {

  constructor(private router: Router){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(localStorage.getItem('token')===null){
          this.router.navigate(['/login']);
          return false;
      }
      else{
        return true;
      }
  }
}
