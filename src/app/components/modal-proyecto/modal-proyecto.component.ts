import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { ProyectoService } from '../../services/proyecto/proyecto.service';
import { Proyecto } from '../../clases/proyecto';

@Component({
  selector: 'modal-proyecto',
  templateUrl: './modal-proyecto.component.html',
  styleUrls: ['./modal-proyecto.component.css']
})
export class ModalProyectoComponent implements OnInit {
	today: Number = Date.now();
	proyecto: Proyecto;

  constructor(private modalService: NgbModal,
  			  private proyectoService: ProyectoService) {}

  ngOnInit(){
  }

  open(content) {
    this.modalService.open(content);
    	console.log(this.today);
  }



  onSubmit(datos: NgForm){
  	console.log(datos.value.nombre);
  	console.log(datos.value.fechaInicio);
  	this.proyecto = new Proyecto(null, datos.value.nombre, datos.value.fechaInicio, datos.value.fechaFin);
  	this.proyectoService.setProyecto(this.proyecto).subscribe(response => { /*this.modalService.close();*/});
  }

}
