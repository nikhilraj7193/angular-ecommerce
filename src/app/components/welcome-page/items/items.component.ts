import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Category } from './category'

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent  {
 
  @Input() category: Category;

  @Output() select: EventEmitter<Category> = new EventEmitter<Category>();
  
  browse() {
    this.select.emit(this.category);
     }

}
