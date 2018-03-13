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

	//inyecto servicio desde constructor
  constructor(private usuarioService:UsuarioService, private router: Router){}

  ngOnInit(){
  }


  addUsuario(){
    //falta validar que usuario no este vacio y demás cosas
    this.usuarioService.setUsuario(this.usuario).subscribe();
    this.router.navigate(['/home']);
  }

  //función que hice mientras estaba probando
  get currentUsuario(){
  	return JSON.stringify(this.usuario);
  }

}
