import { Component, Input, OnInit } from '@angular/core';
import { DetailService } from '../detail.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {
  @Input() listings: any[];

  constructor(private router: Router, private detailService: DetailService) { }

  ngOnInit() {
    if (!this.listings) {
      this.listings = [];
    }
  }

  setCurrentDetail(detail: object): void {
    this.detailService.setCurrentDetail(detail);
    this.router.navigate(['detail']);
  }

}
