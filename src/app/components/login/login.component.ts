import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../clases/usuario';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { Router } from '@angular/router';
import { FlashMessagesService} from 'angular2-flash-messages';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-login',    //tag html con el que identifico al componente
  templateUrl: './login.component.html',  //plantilla que pertenece  login
  styles: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private usuarioService: UsuarioService,
             private router: Router,
             public flashMensaje: FlashMessagesService) { }

  ngOnInit() {
  }

  usuario: Usuario;
  loading: Boolean;
 


  //recibe los valores del formulario a través del parámetro "form" de tipo NgForm
//IMPORTANTE: el SUBSCRIBE indica que hay que hacer luego de que los datos hayan llegado
//y el parámetro reponse dentro del suscribe es lo que devolvió la función loginUsuario().
  login(form: NgForm){
    this.loading = true;
    this.usuario = new Usuario(form.value.inputNombre,"",form.value.inputPassword);
    this.usuarioService.loginUsuario(this.usuario).subscribe(response =>{
        localStorage.setItem('token',response['token']);
        this.router.navigate(['/home']);
        this.loading = false;
      },
      (err:HttpErrorResponse)=>{
        this.loading = false;
        if(err.status == 401){
          this.flashMensaje.show('Nombre de usuario o contraseña incorrecta!',{cssClass:'alert-danger', timeout:4000});
        }
      }
    );
  }

}
