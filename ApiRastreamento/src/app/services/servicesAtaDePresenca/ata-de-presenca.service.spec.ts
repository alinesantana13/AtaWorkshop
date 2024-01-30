import { TestBed } from '@angular/core/testing';

import { AtaDePresencaService } from './ata-de-presenca.service';

describe('AtaDePresencaService', () => {
  let service: AtaDePresencaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AtaDePresencaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
