import { Component, OnInit } from '@angular/core';
import { Cart, CartService } from '../navigation/card-placeholder/cart.service'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  cart: Cart;

  constructor(private cartService: CartService) {
    this.cart = this.cartService.cart;
   }

  ngOnInit(): void {
  }

}
