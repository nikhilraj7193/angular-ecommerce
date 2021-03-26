import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { Product, getProducts } from './products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[];

  constructor(private router: ActivatedRoute) {
      this.router
        .queryParams
        .subscribe(params => {
          let category: string = params['category'];
          let search: string = params['search'];
          // Return filtered data from getProducts function
          let products: Product[] = getProducts(category, search);
          // Transform products to appropriate data
          // to display
          this.products = this.transform(products);
      });
    }
  
  transform(source: Product[]) {
    let index = 0;
    let length = source.length;
    let products = source;
    
    return products;
  }
       
  ngOnInit(): void {
  }

}
