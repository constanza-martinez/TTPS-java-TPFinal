import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../../services/storage/storage.service';
import { Usuario } from '../../clases/usuario';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  //updateUserID: Subject<boolean> = new Subject();
  usuario:Usuario = null;
  ID : string;

  constructor(private router: Router, public storageService:StorageService, private usuarioService: UsuarioService) {
    /*this.updateUserID.subscribe(res => {
                    this.ID = localStorage.getItem('usuario');
    });
    this.misDatos();*/
  }

  ngOnInit() {
    //this.misDatos();
    //console.log(this.usuario);
  }

  logout(){
    this.storageService.deleteLocalStorage('token');
    this.storageService.deleteLocalStorage('usuario');
    this.router.navigate(['/home']);//luego de borrar el token redirecciono a home
  }

  misDatos(){
    this.usuarioService.misDatos().subscribe(response => this.usuario = response);
  }
}
