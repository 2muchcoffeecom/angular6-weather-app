import { TestBed, inject } from '@angular/core/testing';

import { Cities.ServiceService } from './cities.service.service';

describe('Cities.ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Cities.ServiceService]
    });
  });

  it('should be created', inject([Cities.ServiceService], (service: Cities.ServiceService) => {
    expect(service).toBeTruthy();
  }));
});
