import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  listings: object[];

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.listings = [];
    this.getListings();
  }

  getListings(): void {
    const preparedResults = this.searchService.preparedResults;

    if (preparedResults) {
      this.listings = preparedResults;
    }
  }
}
