import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../favorites.service';
import { Item } from '../classes/item';
import { ActivatedRoute } from '@angular/router';
import { PropertyService } from '../property.service';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {
  currentDetail: Item;

  constructor(
    private activatedRoute: ActivatedRoute,
    private propertyService: PropertyService,
    private favoritesService: FavoritesService
  ) { }

  ngOnInit() {
    this.setCurrentDetail();
  }

  setCurrentDetail(): void {
    const params = this.activatedRoute.snapshot.params;
    const id = params.id;
    const sourcePage = params.sourcePage;
    const results$ = this.propertyService.results$;

    if (sourcePage === 'search-results' && results$) {
      results$
        .subscribe(properties => {
          this.currentDetail = properties.find(property => property.id === id);
        });
    }
  }

  addToFavorites(favoriteItem: Item): void {
    this.favoritesService.addToFavorites(favoriteItem);
  }
}
