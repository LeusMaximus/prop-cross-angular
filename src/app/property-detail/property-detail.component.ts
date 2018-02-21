import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Item } from '../classes/item';
import { PropertyService } from '../property.service';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {
  currentProperty: Item;

  constructor(
    private activatedRoute: ActivatedRoute,
    private propertyService: PropertyService,
  ) { }

  ngOnInit() {
    this.setCurrentProperty();
  }

  setCurrentProperty(): void {
    const params = this.activatedRoute.snapshot.params;
    const { id, sourcePage } = params;
    const results$ = this.propertyService.searchResults$;

    if (sourcePage === 'search-results' && results$) {
      results$
        .subscribe(properties => {
          this.currentProperty = properties.find(property => property.id === id);
        });
    }

    if (sourcePage === 'favorites') {
      this.currentProperty = this.propertyService.getFavorites()
        .find(property => property.id === id);
    }
  }

  addToFavorites(favoriteItem: Item): void {
    this.propertyService.addToFavorites(favoriteItem);
  }

  removeFromFavorites(favoriteItem: Item): void {
    this.propertyService.removeFromFavorites(favoriteItem);
  }
}
