import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map, pluck } from 'rxjs/operators';
import { Item } from './classes/item';
import { LocalStorageService } from './localstorage.service';

@Injectable()
export class PropertyService {
  private searchUrl = 'https://api.nestoria.co.uk/api?action=search_listings&encoding=json&place_name=';
  private favoritesKey = 'favorites';

  public searchResponse$: Observable<object>;
  public searchResults$: Observable<Item[]>;
  public searchCount$: Observable<number>;

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) { }

  public search(searchTerm: string): void {
    this.searchResponse$ = this.http.jsonp(this.searchUrl + searchTerm, 'callback');

    this.searchResults$ = this.searchResponse$
      .pipe(
        pluck('response', 'listings'),
        map<any[], any>(results => {
          return results.map(item => new Item(item));
        })
      );

    this.searchCount$ = this.searchResponse$
      .pipe(
        pluck('response', 'total_results')
      );
  }

  public getFavorites(): Item[] {
    return this.localStorageService.getItem(this.favoritesKey) || [];
  }

  public addToFavorites(favoriteItem: Item): void {
    const favorites: Item[] = this.getFavorites();

    favorites.push(favoriteItem);

    this.localStorageService.setItem(this.favoritesKey, favorites);
  }
}
