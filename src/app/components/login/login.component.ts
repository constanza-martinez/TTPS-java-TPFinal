import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../clases/usuario';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit() {
  }

  usuario: Usuario;

  login(form: NgForm){
    this.usuario = new Usuario(form.value.inputNombre,"",form.value.inputPassword);
    this.usuarioService.loginUsuario(this.usuario).subscribe(response =>{
        localStorage.setItem('token',response['token']);
        this.router.navigate(['/home']);
        },
        err=>{
          console.log("Usuario o contraseña invalidos");
        }
    );
  }

}
