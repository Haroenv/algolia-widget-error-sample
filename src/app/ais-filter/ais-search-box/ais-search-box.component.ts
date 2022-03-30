import {Component, forwardRef, Inject, OnInit, Optional} from '@angular/core';
import {NgAisIndex, NgAisInstantSearch, TypedBaseWidget} from 'angular-instantsearch';

import connectSearchBox, {SearchBoxConnectorParams, SearchBoxWidgetDescription} from 'instantsearch.js/es/connectors/search-box/connectSearchBox';

@Component({
  selector: 'app-ais-search-box',
  templateUrl: './ais-search-box.component.html',
  styleUrls: ['./ais-search-box.component.scss']
})
export class AisSearchBoxComponent extends TypedBaseWidget<SearchBoxWidgetDescription, SearchBoxConnectorParams> implements OnInit {

  public state: SearchBoxWidgetDescription['renderState']; // Rendering options
  // {
  //   query: string;
  //   refine: Function;
  //   clear: Function;
  //   isSearchStalled: boolean;
  //   widgetParams: object;
  // }

  constructor(
    @Inject(forwardRef(() => NgAisIndex)) @Optional() public parentIndex: NgAisIndex,
    @Inject(forwardRef(() => NgAisInstantSearch)) public instantSearchInstance: NgAisInstantSearch,
  ) {
    super('SearchBox');
  }

  ngOnInit() {
    this.createWidget(connectSearchBox, {
    //   instance options
    });
    super.ngOnInit();
  }

}
