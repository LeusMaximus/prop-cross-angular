import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {SearchService} from '../search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  pageTitle: string;
  searchTerm: string;

  constructor(private router: Router, private searchService: SearchService) { }

  ngOnInit() {
    this.pageTitle = 'PropertyCross Angular';
    this.searchTerm = '';
  }

  public search(searchTerm: string) {
    this.searchService.search(searchTerm);
    this.router.navigate(['search-results']);
  }

}
