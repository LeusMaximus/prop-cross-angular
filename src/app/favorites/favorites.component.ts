import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../property.service';
import { Item } from '../classes/item';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  listings: Item[];
  pageName: string;

  constructor(private propertyService: PropertyService) {
    this.pageName = 'favorites';
  }

  ngOnInit() {
    this.listings = this.getFavorites();
  }

  getFavorites(): Item[] {
    return this.propertyService.getFavorites();
  }

}
