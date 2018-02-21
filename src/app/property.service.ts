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
  public favoritesIdList: string[];

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {
    this.favoritesIdList = this.createFavoritesIdList();
  }

  public search(searchTerm: string): void {
    this.searchResponse$ = this.http.jsonp(this.searchUrl + searchTerm, 'callback');

    this.searchResults$ = this.searchResponse$
      .pipe(
        pluck('response', 'listings'),
        map<any[], any>(results => {
          return results.map(item => {
            const propertyItem = new Item(item);

            propertyItem.isInFavorites = this.isInFavorites(propertyItem.id);

            return propertyItem;
          });
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

    favoriteItem.isInFavorites = true;

    favorites.push(favoriteItem);

    this.localStorageService.setItem(this.favoritesKey, favorites);
    this.favoritesIdList.push(favoriteItem.id);
  }

  public removeFromFavorites(favoriteItem: Item): void {
    const favorites: Item[] = this.getFavorites();

    const favoriteItemIndex: number = favorites.findIndex(item => item.id === favoriteItem.id);
    const favoriteIdIndex: number = this.favoritesIdList.indexOf(favoriteItem.id);

    if (favoriteItemIndex !== -1) {
      favorites.splice(favoriteItemIndex, 1);
    }

    if (favoriteIdIndex !== -1) {
      this.favoritesIdList.splice(favoriteIdIndex, 1);
    }

    favoriteItem.isInFavorites = false;

    this.localStorageService.setItem(this.favoritesKey, favorites);
  }

  public createFavoritesIdList(): string[] {
    const favorites = this.getFavorites()

    return favorites.map(item => item.id);
  }

  public isInFavorites(id: string): boolean {
    return this.favoritesIdList.indexOf(id) === -1 ? false : true;
  }
}
