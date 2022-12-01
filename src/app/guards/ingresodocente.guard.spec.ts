import { TestBed } from '@angular/core/testing';

import { IngresodocenteGuard } from './ingresodocente.guard';

describe('IngresodocenteGuard', () => {
  let guard: IngresodocenteGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IngresodocenteGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
