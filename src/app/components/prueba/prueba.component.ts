import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario/usuario.service';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {

	user = {};

  constructor(private usuarioService:UsuarioService) { }

  ngOnInit() {
     //this.getUser(1);
     this.misDatos();
  }

  getUser(id){
  	this.usuarioService.getUser(id).subscribe(response=>this.user = response );
  }

  misDatos(){
    this.usuarioService.misDatos().subscribe(response => this.user = response);
  }
  /*getUser(){
    return this.user = JSON.parse(localStorage.getItem('token'));
  }*/
  

}
