import { Component, OnInit, Input } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'modal-ver-proyecto',
  templateUrl: './modal-ver-proyecto.component.html',
  styleUrls: ['./modal-ver-proyecto.component.css']
})
export class ModalVerProyectoComponent implements OnInit {
  modalReference;
  @Input() proyecto;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  open(content){
    this.modalService.open(content).result.then(
      (result)=>{},
      (reason)=>{
      }

    );
  }

}
