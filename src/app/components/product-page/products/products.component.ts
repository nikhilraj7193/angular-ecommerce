import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { Product, ProductService } from './products.service';
import { Cart, CartService } from './../../navigation/card-placeholder/cart.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[];

  private cart: Cart;

  constructor(private router: ActivatedRoute, private productService: ProductService, private cartService: CartService) {
      this.router
        .queryParams
        .subscribe(params => {
          let category: string = params['category'];
          let search: string = params['search'];
          // Return filtered data from getProducts function
          let products: Product[] = this.productService.getProducts(category, search);
          // Transform products to appropriate data
          // to display
          this.products = this.transform(products);
      });

      this.cart = this.cartService.cart;
    }
  
  transform(source: Product[]) {
    let index = 0;
    let length = source.length;
    let products = source;
    
    return products;
  }

  addToCart(product:Product) {
    this.cartService.addProduct(product);
   }
       
  ngOnInit(): void {
  }

}
