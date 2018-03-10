import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../clases/usuario';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit {

  usuario: any = {};

	
  constructor(private usuarioService:UsuarioService, private router: Router){}

  ngOnInit(){
  }


  addUsuario(){
    //validar que usuario no este vacio
    this.usuarioService.setUsuario(this.usuario).subscribe();
    this.router.navigate(['/home']);
  }

  get currentUsuario(){
  	return JSON.stringify(this.usuario);
  }

}
