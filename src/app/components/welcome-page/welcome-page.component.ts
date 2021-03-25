import { Component, OnInit } from '@angular/core';
import { getCategories } from './items/category';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent  {
  categories = getCategories();
}
