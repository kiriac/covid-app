import { TestBed } from '@angular/core/testing';

import { Covid19Service } from './covid19.service';

describe('CovideService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Covid19Service = TestBed.get(Covid19Service);
    expect(service).toBeTruthy();
  });
});
