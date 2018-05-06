import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../clases/usuario';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { Router } from '@angular/router';
import { FlashMessagesService} from 'angular2-flash-messages';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit {

  usuario: any = {};
  loading: Boolean;

	//inyecto servicio desde constructor
  constructor(
      private usuarioService:UsuarioService,
      private router: Router, 
      public flashMensaje: FlashMessagesService
    ){}

  ngOnInit(){
  }

  addUsuario(form: NgForm){
    this.loading = true;
    this.usuario = new Usuario(form.value.inputNombre,form.value.inputEmail,form.value.inputPassword);
    this.usuarioService.setUsuario(this.usuario).subscribe(response =>{
      this.loading = false;
      this.flashMensaje.show('Se ha registrado correctamente!',{cssClass:'alert-success', timeout:4000});
      this.router.navigate(['/home']);
    },
    (err:HttpErrorResponse)=>{
      this.loading = false;
      if(err.status == 409){
        this.flashMensaje.show('El nombre de usuario que eligio ya existe!',{cssClass:'alert-danger', timeout:4000});
      }
    });
  }

  //función que hice mientras estaba probando
  get currentUsuario(){
  	return JSON.stringify(this.usuario);
  }

}
