import { TestBed } from '@angular/core/testing';

import { NgccTestLibraryService } from './ngcc-test-library.service';

describe('NgccTestLibraryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgccTestLibraryService = TestBed.get(NgccTestLibraryService);
    expect(service).toBeTruthy();
  });
});
