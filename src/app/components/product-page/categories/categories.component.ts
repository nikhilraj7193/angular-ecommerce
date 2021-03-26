import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Category, getCategories } from '../../welcome-page/items/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  categories: Category[] = getCategories();

  filterProducts(category: Category) {
    this.router.navigate(['./products'], {
      queryParams: { category: category.id }
    })
  }
}
