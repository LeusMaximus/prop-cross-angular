import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../classes/item';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {
  @Input() listings: Item[];
  @Input() sourcePageName: string;

  constructor() { }

  ngOnInit() {
    if (!this.listings) {
      this.listings = [];
    }
  }
}
