import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


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
import { InfoProductComponent } from './components/info-product/info-product.component';
import { CategoryTitlePipe } from './components/welcome-page/items/category.pipe';
import { CartViewComponent } from './components/cart-view/cart-view.component';
import { CheckoutComponent } from './components/checkout/checkout.component'


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
    FooterComponent,
    InfoProductComponent,
    CategoryTitlePipe,
    CartViewComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [ProductService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
