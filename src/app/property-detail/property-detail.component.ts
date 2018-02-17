import { Component, OnInit } from '@angular/core';
import { DetailService } from '../detail.service';
import { FavoritesService } from '../favorites.service';
import { Item } from '../classes/item';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {
  currentDetail: Item;

  constructor(private detailService: DetailService, private favoritesService: FavoritesService) { }

  ngOnInit() {
    this.getCurrentDetail();
  }

  getCurrentDetail(): void {
    const detail = this.detailService.getCurrentDetail();

    if (detail) {
      this.currentDetail = detail;
    }
  }

  addToFavorites(favoriteItem: Item): void {
    this.favoritesService.addToFavorites(favoriteItem);
  }
}
