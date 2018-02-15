import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Injectable()
export class SearchService {
  private searchUrl = 'https://api.nestoria.co.uk/api?action=search_listings&encoding=json&place_name=';

  public results: Observable<any[]>;

  public preparedResults: any[];

  constructor(private http: HttpClient) { }

  public search(searchTerm: string): Observable<any[]> {
    this.results = this.http.jsonp(this.searchUrl + searchTerm, 'callback')
      .pipe(
        map(results => results['response'].listings)
      );

    return this.results;
  }
}
