import { TestBed } from '@angular/core/testing';

import { PoderticService } from './podertic.service';

describe('PoderticService', () => {
  let service: PoderticService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PoderticService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
