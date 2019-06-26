import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgccTestLibraryModule } from 'ngcc-test-library';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgccTestLibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
