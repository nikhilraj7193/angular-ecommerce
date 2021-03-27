import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { SlideshowComponent } from './components/welcome-page/slideshow/slideshow.component';
import { ItemsComponent } from './components/welcome-page/items/items.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { QuickShopComponent } from './components/product-page/quick-shop/quick-shop.component';
import { CategoriesComponent } from './components/product-page/categories/categories.component';
import { ProductsComponent } from './components/product-page/products/products.component';
import { CardPlaceholderComponent } from './components/navigation/card-placeholder/card-placeholder.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductService } from './components/product-page/products/products.service';
import { CartService } from './components/navigation/card-placeholder/cart.service';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    WelcomePageComponent,
    SlideshowComponent,
    ItemsComponent,
    ProductPageComponent,
    QuickShopComponent,
    CategoriesComponent,
    ProductsComponent,
    CardPlaceholderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProductService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
