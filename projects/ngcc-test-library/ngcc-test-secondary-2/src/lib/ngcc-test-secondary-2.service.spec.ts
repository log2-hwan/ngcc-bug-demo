import { TestBed } from '@angular/core/testing';

import { NgccTestSecondary2Service } from './ngcc-test-secondary-2.service';

describe('NgccTestSecondary2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgccTestSecondary2Service = TestBed.get(NgccTestSecondary2Service);
    expect(service).toBeTruthy();
  });
});
