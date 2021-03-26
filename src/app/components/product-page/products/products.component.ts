import { Component, OnInit } from '@angular/core';

import { Product, getProducts } from './products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = getProducts();
  
  constructor() { }

  ngOnInit(): void {
  }

}
