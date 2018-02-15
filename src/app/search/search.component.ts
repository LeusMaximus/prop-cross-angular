import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {SearchService} from '../search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchTerm: string;

  constructor(private router: Router, private searchServide: SearchService) { }

  ngOnInit() {
    this.searchTerm = '';
  }

  public search(searchTerm: string) {
    this.searchServide.search(searchTerm);
    this.router.navigate(['search-results']);
  }

}
