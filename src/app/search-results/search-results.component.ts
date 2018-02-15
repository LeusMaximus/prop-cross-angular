import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  listings: any[];

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.listings = [];
    this.getListings();
  }

  getListings(): void {
    const results = this.searchService.results;

    if (results) {
      results.subscribe(items => this.listings = items);
    }
  }
}
