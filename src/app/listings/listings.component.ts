import { Component, Input, OnInit } from '@angular/core';
import { DetailService } from '../detail.service';
import { Router } from '@angular/router';
import { Item } from '../classes/item';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {
  @Input() listings: Item[];

  constructor(private router: Router, private detailService: DetailService) { }

  ngOnInit() {
    if (!this.listings) {
      this.listings = [];
    }
  }

  setCurrentDetail(detail: Item): void {
    this.detailService.setCurrentDetail(detail);
    this.router.navigate(['detail']);
  }

}
