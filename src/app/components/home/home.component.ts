import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage/storage.service';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { ProyectoService } from '../../services/proyecto/proyecto.service';
import { Proyecto } from '../../clases/proyecto';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ModalProyectoComponent } from '../modal-proyecto/modal-proyecto.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})

export class HomeComponent implements OnInit {
  token = localStorage.getItem('token');
  proyectos: Proyecto[];
  contiene: Boolean = false;

  constructor(public storageService:StorageService,
  			  private usuarioService: UsuarioService,
  			  private proyectoService: ProyectoService 
  			  ) { }

  ngOnInit() {

  	if (this.storageService.getLocalStorage('token')) {
  		this.getProyectos();
      //console.log(this.proyectos.length);
  	}

  }

  getProyectos(){
  	this.proyectoService.getProyectos().subscribe(proyectos => {this.proyectos = proyectos; 
      if (this.proyectos.length > 0) {
        this.contiene = true;
      }
    });
  }

}
