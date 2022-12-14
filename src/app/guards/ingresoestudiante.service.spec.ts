import { TestBed } from '@angular/core/testing';

import { IngresoestudianteService } from './ingresoestudiante.service';

describe('IngresoestudianteService', () => {
  let service: IngresoestudianteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IngresoestudianteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
