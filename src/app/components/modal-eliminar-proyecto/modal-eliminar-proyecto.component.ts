import { Component, OnInit, Input } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { ProyectoService } from '../../services/proyecto/proyecto.service';
import { FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'modal-eliminar-proyecto',
  templateUrl: './modal-eliminar-proyecto.component.html',
  styleUrls: ['./modal-eliminar-proyecto.component.css']
})
export class ModalEliminarProyectoComponent implements OnInit {
  @Input() proyectos;
  @Input() id;
  @Input() nombreProyecto;
  modalReference;
  
  constructor(private modalService: NgbModal,
    public flashMensaje: FlashMessagesService,
    private proyectoService: ProyectoService) {}

  ngOnInit() {
  }

  open(content){
    this.modalReference=this.modalService.open(content);
  }

  removeProyecto(id) {
    let index = this.proyectos.map(function(e) { return e.id }).indexOf(id);//genero un nuevo arreglo con los id de los proyectos luego con indexOf hago la búsqueda y me quedo con el indice
    if(index > -1){
      this.proyectos.splice(index,1);//borro un elemento desde la posición index
      this.proyectoService.deleteProyecto(id).subscribe(response => {
        this.flashMensaje.show("El proyecto"+ this.nombreProyecto +" ha sido eliminado!",{cssClass:'alert-success', timeout:4000});
      }); //Elimino de forma física
    }
    else{
      console.log("No se encontro el proyecto a eliminar!");
    }
    this.modalReference.close();
  }

}
