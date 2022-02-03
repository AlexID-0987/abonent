import { TestBed } from '@angular/core/testing';

import { UserFormDeactivateGuard } from './user-form-deactivate.guard';

describe('UserFormDeactivateGuard', () => {
  let guard: UserFormDeactivateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UserFormDeactivateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
