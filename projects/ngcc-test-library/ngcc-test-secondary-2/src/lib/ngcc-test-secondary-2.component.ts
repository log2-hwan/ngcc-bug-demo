import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-ngcc-test-secondary-2',
  template: `
    <p>
      ngcc-test-secondary-2 works!
    </p>
    <lib-ngcc-test-secondary></lib-ngcc-test-secondary>
  `,
  styles: []
})
export class NgccTestSecondary2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
