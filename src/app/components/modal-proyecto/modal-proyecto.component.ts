import { Component, OnInit, Input } from '@angular/core';
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
  @Input() proyectos;//arreglo de proyectos que se muestra en el home
  modalReference;

  constructor(private modalService: NgbModal,
  			  private proyectoService: ProyectoService) {}

  ngOnInit(){
  }

  open(content) {
    this.modalReference=this.modalService.open(content);
  }



  onSubmit(datos: NgForm){
  	console.log(datos.value.nombre);
  	console.log(datos.value.fechaInicio);
  	this.proyecto = new Proyecto(null, datos.value.nombre, datos.value.fechaInicio, datos.value.fechaFin);
  	this.proyectoService.setProyecto(this.proyecto).subscribe(
      response => { /*this.modalService.close();*/}
      ,error=>{}
      ,() =>{ 
        this.proyectos.push(this.proyecto);//además de actualizar la bd, actualizo el arreglo del home, asi no tengo que recargar la página para ver el nuevo proyecto
        this.modalReference.close()}
    );
  }

}
