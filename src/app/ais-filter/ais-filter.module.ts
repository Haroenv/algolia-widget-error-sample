import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AisSearchBoxComponent} from './ais-search-box/ais-search-box.component';


@NgModule({
  declarations: [
    AisSearchBoxComponent
  ],
  exports: [
    AisSearchBoxComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class AisFilterModule {
}
