import { Pipe, PipeTransform } from '@angular/core';
import { Category, getCategory } from './category';

@Pipe({ name: 'categoryTitle' })
export class CategoryTitlePipe implements PipeTransform {

    transform(value: string): string {
        let category: Category = getCategory(value);
        return category ? category.title : '';
    }
}