import { TestBed } from '@angular/core/testing';

import { DictserviceService } from './dictservice.service';

describe('DictserviceService', () => {
  let service: DictserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DictserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
