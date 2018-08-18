import { TestBed, inject } from '@angular/core/testing';

import { ProyectoService } from './proyecto.service';

describe('ProyectoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProyectoService]
    });
  });

  it('should be created', inject([ProyectoService], (service: ProyectoService) => {
    expect(service).toBeTruthy();
  }));
});
