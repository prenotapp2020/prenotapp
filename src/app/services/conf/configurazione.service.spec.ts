import { TestBed } from '@angular/core/testing';

import { ConfigurazioneService } from './configurazione.service';

describe('ConfigurazioneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConfigurazioneService = TestBed.get(ConfigurazioneService);
    expect(service).toBeTruthy();
  });
});
