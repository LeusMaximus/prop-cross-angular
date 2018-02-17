import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {map, pluck} from 'rxjs/operators';
import {Item} from './classes/item';

@Injectable()
export class SearchService {
  private searchUrl = 'https://api.nestoria.co.uk/api?action=search_listings&encoding=json&place_name=';

  public results$: Observable<Item[]>;

  constructor(private http: HttpClient) { }

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
}
