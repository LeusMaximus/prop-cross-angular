import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../favorites.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  listings: object[];

  constructor(private favoritesService: FavoritesService) { }

  ngOnInit() {
    this.listings = this.getFavorites();
  }

  getFavorites(): object[] {
    return this.favoritesService.getFavorites();
  }

}
