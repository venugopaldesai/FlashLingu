import { TestBed } from '@angular/core/testing';

import { FlashserviceService } from './flashservice.service';

describe('FlashserviceService', () => {
  let service: FlashserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlashserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
