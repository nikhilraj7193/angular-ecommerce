import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Cart, CartItem, CartService} from '../navigation/card-placeholder/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

private cart: Cart;

form: FormGroup;

constructor(private cartService: CartService,
            private fb: FormBuilder) {
                this.cart = this.cartService.cart;
              }

ngOnInit() {
  this.form = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required],
    phone: ['', Validators.required],
    address: []
  });
 }

submit() { 
  alert('Submitted');
  this.cartService.clearCart();
}
  
}
