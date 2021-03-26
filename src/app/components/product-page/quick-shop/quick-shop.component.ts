import { Component, OnInit } from '@angular/core';
import { Router } from  '@angular/router';

import { getProducts } from '../products/products';

@Component({
  selector: 'app-quick-shop',
  templateUrl: './quick-shop.component.html',
  styleUrls: ['./quick-shop.component.css']
})
export class QuickShopComponent implements OnInit {

  products = getProducts();
  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  searchProduct(value: string) {
    this.router.navigate(['/products'],
    { queryParams: { search: value} });
  }
}

