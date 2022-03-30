import {Component, ContentChild, Input, TemplateRef} from '@angular/core';
import {InstantSearchConfig} from 'angular-instantsearch/instantsearch/instantsearch';

export interface TableConfig {
  header?: {
    title?: string | null | false;
    description?: string | null | false;
  };
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() AisConfig: InstantSearchConfig;
  @Input() TableConfig: TableConfig;

  @ContentChild(TemplateRef) templ: any;

  constructor() { }

}
