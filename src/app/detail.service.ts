import { Injectable } from '@angular/core';

@Injectable()
export class DetailService {
  currentDetail: object;

  constructor() { }

  public getCurrentDetail(): object {
    return this.currentDetail;
  }

  public setCurrentDetail(detail: object): void {
    this.currentDetail = detail;
  }
}
