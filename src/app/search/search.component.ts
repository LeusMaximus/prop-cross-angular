import { Component, OnInit } from '@angular/core';

import { RECENT_SEARCHES } from '../mock-recent-searches';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  currentRequest: string = '';

  recentSearches = RECENT_SEARCHES;

  goToSearchItem(searchItem): void {
    // TODO: Need to do
    alert('Go to search item page');
  }

  constructor() { }

  ngOnInit() {
  }

}
