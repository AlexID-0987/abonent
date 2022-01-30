import { TestBed } from '@angular/core/testing';

import { Pers1Service } from './pers1.service';

describe('Pers1Service', () => {
  let service: Pers1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Pers1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
