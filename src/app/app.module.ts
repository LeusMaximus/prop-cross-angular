import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchResultsComponent } from './search-results/search-results.component';
import { PropertyService } from './property.service';
import { ListingsComponent } from './listings/listings.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { PropertyDetailComponent } from './property-detail/property-detail.component';
import { LocalStorageService } from './localstorage.service';
import { RecentSearchesService } from './recent-searches.service';
import { RecentSearchesComponent } from './recent-searches/recent-searches.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SearchResultsComponent,
    ListingsComponent,
    MainHeaderComponent,
    FavoritesComponent,
    PropertyDetailComponent,
    RecentSearchesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [PropertyService, LocalStorageService, RecentSearchesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
