import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { StorageService } from '../../services/storage/storage.service';  
import { ProyectoService } from '../../services/proyecto/proyecto.service';
import { Proyecto } from '../../clases/proyecto';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {

	user = {};
  idUsuario: string;
  proyectos: Proyecto[];

  constructor(private usuarioService:UsuarioService, 
              private storageService: StorageService,
              private proyecto: ProyectoService
              ) { }

  ngOnInit() {
    this.proyectos = null;
     //this.getUser(1);
     //this.misDatos();
     this.obtenerId();
     this.getProyectos();
  }

  getUser(id){
  	this.usuarioService.getUser(id).subscribe(response=>this.user = response );
  }

  misDatos(){
    this.usuarioService.misDatos().subscribe(response => this.user = response);
  }

  obtenerId(){
    this.idUsuario = this.storageService.getLocalStorage('usuario');
  }
  /*getUser(){
    return this.user = JSON.parse(localStorage.getItem('token'));
  }*/

  getProyectos(){
    this.proyecto.getProyectos().subscribe(proyectos => this.proyectos = proyectos);
  }
  
}
