import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PropertyService } from '../property.service';
import { RecentSearchesService } from '../recent-searches.service';
import { RecentSearch } from '../classes/recentSearch';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  pageTitle: string;
  searchTerm: string;

  constructor(
    private router: Router,
    private propertyService: PropertyService,
    private recentSearchesService: RecentSearchesService
  ) { }

  ngOnInit() {
    this.pageTitle = 'PropertyCross Angular';
  }

  public search(searchTerm: string): void {
    if (!searchTerm) {
      return;
    }

    this.propertyService.search(searchTerm);

    this.propertyService.searchResults$
      .subscribe(() => {
        this.router.navigate(['search-results']);
      });

    this.propertyService.searchCount$
      .subscribe(number => {
        this.recentSearchesService.addToRecentSearches(new RecentSearch({name: searchTerm, count: number}));
      });
  }

  public onRepeatSearch(term: string): void {
    this.search(term);
  }

}
