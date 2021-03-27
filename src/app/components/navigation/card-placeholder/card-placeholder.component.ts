import { Component, OnInit } from '@angular/core';

import { Cart, CartService } from './cart.service'

@Component({
  selector: 'app-card-placeholder',
  templateUrl: './card-placeholder.component.html',
  styleUrls: ['./card-placeholder.component.css']
})
export class CardPlaceholderComponent implements OnInit {

  cart: Cart;  

  constructor(private cartService: CartService) {
      this.cart = this.cartService.cart;
   }

  ngOnInit(): void {
  }

}
