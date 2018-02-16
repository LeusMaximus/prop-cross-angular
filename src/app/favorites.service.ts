import { Injectable } from '@angular/core';

@Injectable()
export class FavoritesService {

  constructor() { }

  getFavorites(): object[] {
    const favorites = JSON.parse(localStorage.getItem('favorites'));

    return favorites ? favorites : [];
  }

  addToFavorites(favoriteItem: object): void {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    favorites.push(favoriteItem);

    localStorage.setItem('favorites', JSON.stringify(favorites));
  }

}
