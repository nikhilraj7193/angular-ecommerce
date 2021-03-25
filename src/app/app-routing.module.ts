import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductPageComponent } from './components/product-page/product-page.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';

const routes: Routes = [
  { path: '', component: WelcomePageComponent},
  { path: 'products', component: ProductPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
