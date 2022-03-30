import { Component } from '@angular/core';
import algoliasearch from 'algoliasearch/lite';
import {InstantSearchConfig} from 'angular-instantsearch/instantsearch/instantsearch';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public AisConfig: InstantSearchConfig = {
    indexName: `demo`,
    searchClient: algoliasearch('0T5PPH4M06', '4172b00492dc138b1e1dce41ba727df8'),
  };
  public TableConfig = {
    header: {title: 'LIST', description: 'Desription'},
  };
}
