import { NgModule } from '@angular/core';

import { NgccTestSecondaryModule } from 'ngcc-test-library/ngcc-test-secondary';

import { NgccTestSecondary2Component } from './ngcc-test-secondary-2.component';

@NgModule({
  declarations: [NgccTestSecondary2Component],
  imports: [NgccTestSecondaryModule],
  exports: [NgccTestSecondary2Component]
})
export class NgccTestSecondary2Module { }
