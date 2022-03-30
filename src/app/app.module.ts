import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {TableModule} from './table/table.module';
import {AisFilterModule} from './ais-filter/ais-filter.module';
import {NgAisSearchBoxModule, NgAisInstantSearchModule} from 'angular-instantsearch';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TableModule,
    NgAisInstantSearchModule,
    AisFilterModule,
    NgAisSearchBoxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
