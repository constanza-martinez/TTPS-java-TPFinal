import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalVerProyectoComponent } from './modal-ver-proyecto.component';

describe('ModalVerProyectoComponent', () => {
  let component: ModalVerProyectoComponent;
  let fixture: ComponentFixture<ModalVerProyectoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalVerProyectoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalVerProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
