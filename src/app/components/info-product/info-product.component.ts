import { Component, OnInit } from '@angular/core';

import { Product, ProductService } from '../product-page/products/products.service';
import { Cart, CartItem, CartService } from '../navigation/card-placeholder/cart.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-info-product',
  templateUrl: './info-product.component.html',
  styleUrls: ['./info-product.component.css']
})
export class InfoProductComponent implements OnInit {

  product: Product;
  cartItem: CartItem;

  constructor(private productService: ProductService,
              private cartService: CartService,
              private route: ActivatedRoute,
              ) { 

                this.route.params.subscribe( params => {
                  // Get the product id
                  let id: string = params['id'];
                  // Return the product from ProductService
                  this.product = this.productService.getProduct(id);
                  // Return the cart item
                  this.cartItem = this.cartService.findItem(id);

                });

                

              }

  ngOnInit(): void {
  }

    
  get quantity(): number {
    return this.cartItem ? this.cartItem.count : 0;
   }

  get amount(): number {return this.cartItem ? this.cartItem.amount : 0;
  }

  addToCart(product:Product) {
    this.cartService.addProduct(this.product);
  }

  removeFromCart() {
    this.cartService.removeProduct(this.product);
    
  }

}
