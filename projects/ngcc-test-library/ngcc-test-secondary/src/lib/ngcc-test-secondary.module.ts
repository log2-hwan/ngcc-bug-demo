import { NgModule } from '@angular/core';

import { NgccTestLibraryModule } from 'ngcc-test-library';

import { NgccTestSecondaryComponent } from './ngcc-test-secondary.component';

@NgModule({
  declarations: [NgccTestSecondaryComponent],
  imports: [NgccTestLibraryModule],
  exports: [NgccTestSecondaryComponent]
})
export class NgccTestSecondaryModule { }
