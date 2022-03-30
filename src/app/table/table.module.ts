import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TableComponent} from './table.component';
import {TableHeadComponent} from './table-head/table-head.component';
import {TableBodyComponent} from './table-body/table-body.component';
import {TableHeadItemComponent} from './table-head-item/table-head-item.component';
import {TableBodyRowComponent} from './table-body-row/table-body-row.component';
import {NgAisHitsModule} from 'angular-instantsearch';


@NgModule({
  declarations: [
    TableComponent,
    TableHeadComponent,
    TableBodyComponent,
    TableHeadItemComponent,
    TableBodyRowComponent
  ],
  exports: [
    TableComponent,
    TableHeadComponent,
    TableBodyComponent,
    TableHeadItemComponent,
    TableBodyRowComponent
  ],
  imports: [
    CommonModule,
    NgAisHitsModule
  ]
})
export class TableModule {
}
