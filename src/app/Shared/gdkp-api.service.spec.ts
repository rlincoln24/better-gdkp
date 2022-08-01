import { TestBed } from '@angular/core/testing';

import { GdkpApiService } from './gdkp-api.service';

describe('GdkpApiService', () => {
  let service: GdkpApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GdkpApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
