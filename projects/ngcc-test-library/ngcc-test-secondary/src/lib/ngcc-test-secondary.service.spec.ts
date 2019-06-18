import { TestBed } from '@angular/core/testing';

import { NgccTestSecondaryService } from './ngcc-test-secondary.service';

describe('NgccTestSecondaryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgccTestSecondaryService = TestBed.get(NgccTestSecondaryService);
    expect(service).toBeTruthy();
  });
});
