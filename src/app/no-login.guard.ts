import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

//archivo para evitar entrar a paginas como login o register cuando uno ya esta logueado

@Injectable()
export class NoLoginGuard implements CanActivate {

  constructor(private router: Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(localStorage.getItem('token')===null){
        return true;
    }
    else{
      this.router.navigate(['/home']);
      return false;
    }
  }
}
