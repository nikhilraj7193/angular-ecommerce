import { Component, OnInit } from '@angular/core';
import { Router } from  '@angular/router';

import { Product, ProductService } from '../products/products.service';

@Component({
  selector: 'app-quick-shop',
  templateUrl: './quick-shop.component.html',
  styleUrls: ['./quick-shop.component.css']
})
export class QuickShopComponent implements OnInit {

   products: Product[]

  constructor(private router : Router, private productService: ProductService) {
    this.products  = this.productService.getProducts();
   }

  ngOnInit(): void {
  }

  searchProduct(value: string) {
    this.router.navigate(['/products'],
    { queryParams: { search: value} });
  }
}

