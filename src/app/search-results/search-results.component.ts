import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../property.service';
import { Observable } from 'rxjs/Observable';
import { Item } from '../classes/item';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  results$: Observable<Item[]>;
  pageName: string;

  constructor(private propertyService: PropertyService) {
    this.pageName = 'search-results';
  }

  ngOnInit() {
    this.results$ = this.propertyService.results$;
  }
}
