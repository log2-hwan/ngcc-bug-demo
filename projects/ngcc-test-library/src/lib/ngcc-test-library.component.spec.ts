import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgccTestLibraryComponent } from './ngcc-test-library.component';

describe('NgccTestLibraryComponent', () => {
  let component: NgccTestLibraryComponent;
  let fixture: ComponentFixture<NgccTestLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgccTestLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgccTestLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
