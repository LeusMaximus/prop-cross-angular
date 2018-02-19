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

  public results$: Observable<Item[]>;

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) { }

  public search(searchTerm: string): Observable<Item[]> {
    this.results$ = this.http.jsonp(this.searchUrl + searchTerm, 'callback')
      .pipe(
        pluck('response', 'listings'),
        map<any[], any>(results => {
          return results.map(item => new Item(item));
        })
      );

    return this.results$;
  }

  public getFavorites(): Item[] {
    const favorites = this.localStorageService.getItem(this.favoritesKey);

    return favorites ? favorites : [];
  }

  public addToFavorites(favoriteItem: Item): void {
    const favorites = this.getFavorites();

    favorites.push(favoriteItem);

    this.localStorageService.setItem(this.favoritesKey, favorites);
  }
}
