import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import {Observable} from 'rxjs/Observable';
import {Item} from '../classes/item';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  results$: Observable<Item[]>;

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.results$ = this.searchService.results$;
  }
}
