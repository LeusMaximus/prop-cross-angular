import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

  constructor() {}

  getItem(key: string): any {
    let value: any;

    try {
      value = JSON.parse(localStorage.getItem(key));
    } catch (e) {
      value = null;
    }

    return value;
  }

  setItem(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }
}
