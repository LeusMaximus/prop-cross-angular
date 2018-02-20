import { Injectable } from '@angular/core';
import { LocalStorageService } from './localstorage.service';
import { RecentSearch } from './classes/recentSearch';

@Injectable()
export class RecentSearchesService {
  private recentSearchesKey = 'recentSearches';

  constructor(private localStorageService: LocalStorageService) { }

  public getRecentSearches(): RecentSearch[] {
    return this.localStorageService.getItem(this.recentSearchesKey) || [];
  }

  public addToRecentSearches(recentSearch: RecentSearch) {
    const recentSearches: RecentSearch[] = this.getRecentSearches();
    const recentSearchIndex: number = recentSearches.findIndex(item => item.name === recentSearch.name);

    if (recentSearchIndex !== -1) {
      recentSearches.splice(recentSearchIndex, 1);
    }

    recentSearches.unshift(recentSearch);

    this.localStorageService.setItem(this.recentSearchesKey, recentSearches);
  }
}
