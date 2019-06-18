import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgccTestSecondary2Component } from './ngcc-test-secondary-2.component';

describe('NgccTestSecondary2Component', () => {
  let component: NgccTestSecondary2Component;
  let fixture: ComponentFixture<NgccTestSecondary2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgccTestSecondary2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgccTestSecondary2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
