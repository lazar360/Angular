import { TestBed } from '@angular/core/testing';

import { ParkingsRelaisService } from './parkings-relais.service';

describe('ParkingsRelaisService', () => {
  let service: ParkingsRelaisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParkingsRelaisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
