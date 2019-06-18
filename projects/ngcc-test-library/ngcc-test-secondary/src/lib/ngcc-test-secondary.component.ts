import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-ngcc-test-secondary',
  template: `
    <p>
      ngcc-test-secondary works!
    </p>
    <lib-ngcc-test-library></lib-ngcc-test-library>
  `,
  styles: []
})
export class NgccTestSecondaryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
