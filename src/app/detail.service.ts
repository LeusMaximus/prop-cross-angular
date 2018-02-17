import { Injectable } from '@angular/core';
import { Item } from './classes/item';

@Injectable()
export class DetailService {
  currentDetail: Item;

  constructor() { }

  public getCurrentDetail(): Item {
    return this.currentDetail;
  }

  public setCurrentDetail(detail: Item): void {
    this.currentDetail = detail;
  }
}
