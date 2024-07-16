import { TestBed } from '@angular/core/testing';

import { MargaritaService } from './margarita.service';

describe('MargaritaService', () => {
  let service: MargaritaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MargaritaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
