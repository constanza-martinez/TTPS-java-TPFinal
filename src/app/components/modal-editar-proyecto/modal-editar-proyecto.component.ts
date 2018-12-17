import { Component, OnInit, Input } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { ProyectoService } from '../../services/proyecto/proyecto.service';
import { Proyecto } from '../../clases/proyecto';

@Component({
  selector: 'modal-editar-proyecto',
  templateUrl: './modal-editar-proyecto.component.html',
  styleUrls: ['./modal-editar-proyecto.component.css']
})
export class ModalEditarProyectoComponent implements OnInit {
  @Input() proyect;
  @Input() proyectos;
  today: Number = Date.now();
  proyecto: Proyecto;
  modalReference;
  
  constructor(private modalService: NgbModal,
    private proyectoService: ProyectoService) {}

  ngOnInit() {
  }

  open(content){
    this.modalReference=this.modalService.open(content);
  }

  onSubmit(datos: NgForm){
  	console.log(datos.value.nombre);
  	console.log(datos.value.fechaInicio);
    this.proyecto = new Proyecto(this.proyect.id, datos.value.nombre, datos.value.fechaInicio, datos.value.fechaFin);
    
  	this.proyectoService.updateProyecto(this.proyecto).subscribe(
      response => {}
      ,error=>{}
      ,() =>{
         this.modalReference.close();
         this.proyectos.forEach(element => {
          if(element.id == this.proyect.id){
            element.setNombre(datos.value.nombre);
            element.setFechaInicio(datos.value.fechaInicio);
            element.setFechaFinalizacion(datos.value.fechaFin);
          }
        });
        }
    );
  }

}
