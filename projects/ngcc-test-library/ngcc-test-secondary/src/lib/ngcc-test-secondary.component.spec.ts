import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgccTestSecondaryComponent } from './ngcc-test-secondary.component';

describe('NgccTestSecondaryComponent', () => {
  let component: NgccTestSecondaryComponent;
  let fixture: ComponentFixture<NgccTestSecondaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgccTestSecondaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgccTestSecondaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
