import { NgModule } from '@angular/core';

import { NgccTestSecondaryModule } from 'ngcc-test-library/ngcc-test-secondary';

import { NgccTestLibraryComponent } from './ngcc-test-library.component';

@NgModule({
  declarations: [NgccTestLibraryComponent],
  imports: [NgccTestSecondaryModule],
  exports: [NgccTestLibraryComponent]
})
export class NgccTestLibraryModule { }
