import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { SlideshowComponent } from './welcome-page/slideshow/slideshow.component';
import { ItemsComponent } from './welcome-page/items/items.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    WelcomePageComponent,
    SlideshowComponent,
    ItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
