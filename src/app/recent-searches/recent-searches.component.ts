import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RecentSearchesService } from '../recent-searches.service';
import { RecentSearch } from '../classes/recentSearch';

@Component({
  selector: 'app-recent-searches',
  templateUrl: './recent-searches.component.html',
  styleUrls: ['./recent-searches.component.css']
})
export class RecentSearchesComponent implements OnInit {
  @Output() onRepeatSearch = new EventEmitter<string>();

  public recentSearchesList: RecentSearch[];

  constructor(private recentSearchesService: RecentSearchesService) { }

  ngOnInit() {
    this.recentSearchesList = this.getRecentSearches();
  }

  public getRecentSearches() {
    return this.recentSearchesService.getRecentSearches();
  }

  public search(event, term: string) {
    event.preventDefault();
    this.onRepeatSearch.emit(term);
  }

}
