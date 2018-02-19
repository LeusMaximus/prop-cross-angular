import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PropertyService } from '../property.service';

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
    private propertyService: PropertyService
  ) { }

  ngOnInit() {
    this.pageTitle = 'PropertyCross Angular';
    this.searchTerm = '';
  }

  public search(searchTerm: string): void {
    if (!searchTerm) {
      return;
    }

    this.propertyService.search(searchTerm);

    this.propertyService.results$
      .subscribe(() => {
        this.router.navigate(['search-results']);
      });
  }

}
