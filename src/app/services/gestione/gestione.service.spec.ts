import { TestBed } from '@angular/core/testing';

import { GestioneService } from './gestione.service';

describe('GestioneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GestioneService = TestBed.get(GestioneService);
    expect(service).toBeTruthy();
  });
});
