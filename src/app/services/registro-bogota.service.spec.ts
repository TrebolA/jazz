import { TestBed, inject } from '@angular/core/testing';

import { RegistroBogotaService } from './registro-bogota.service';

describe('RegistroBogotaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegistroBogotaService]
    });
  });

  it('should be created', inject([RegistroBogotaService], (service: RegistroBogotaService) => {
    expect(service).toBeTruthy();
  }));
});
