import { TestBed } from '@angular/core/testing';

import { TequilaService } from './tequila.service';

describe('TequilaService', () => {
  let service: TequilaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TequilaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
