import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { PropertyDetailComponent } from './property-detail/property-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: 'search', component: SearchComponent },
  { path: 'search-results', component: SearchResultsComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'detail', component: PropertyDetailComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
