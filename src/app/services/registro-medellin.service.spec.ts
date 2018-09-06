import { TestBed, inject } from '@angular/core/testing';

import { RegistroMedellinService } from './registro-medellin.service';

describe('RegistroMedellinService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegistroMedellinService]
    });
  });

  it('should be created', inject([RegistroMedellinService], (service: RegistroMedellinService) => {
    expect(service).toBeTruthy();
  }));
});
