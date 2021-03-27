import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductPageComponent } from './components/product-page/product-page.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { InfoProductComponent } from './components/info-product/info-product.component';
import { CartViewComponent } from './components/cart-view/cart-view.component';
import { CheckoutComponent } from './components/checkout/checkout.component'

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomePageComponent},
  { path: 'products', component: ProductPageComponent },
  { path: 'products/:id', component: InfoProductComponent},
  { path: 'cart', component: CartViewComponent},
  { path: 'checkout', component: CheckoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
