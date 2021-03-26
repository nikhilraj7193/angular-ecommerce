import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { Category } from './category';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent  {
 
  constructor( private router: Router) {}

  @Input() category: Category;

  @Output() select: EventEmitter<Category> = new EventEmitter<Category>();
  
  browse() {
    this.select.emit(this.category);
     }

     filterProducts(category: Category) {
       this.router.navigate(['./products'], {
         queryParams: { category: category.id }
       })
     }
}
