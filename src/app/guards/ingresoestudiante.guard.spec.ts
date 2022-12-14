import { TestBed } from '@angular/core/testing';

import { IngresoestudianteGuard } from './ingresoestudiante.guard';

describe('IngresoestudianteGuard', () => {
  let guard: IngresoestudianteGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IngresoestudianteGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
