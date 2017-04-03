import { Component, OnInit }  from '@angular/core';

import { ICategory } from './category';
import { CategoryService } from './category.service';

@Component({
    templateUrl: 'app/products/categories-list.component.html',
    styleUrls: ['app/products/product-list.component.css']
})
export class CategoriesListComponent implements OnInit {
    pageTitle: string = 'Category List';
    errorMessage: string;

    categories: ICategory[];

    constructor(private _categoryService: CategoryService) {

    }

    ngOnInit(): void {
        this._categoryService.getCategories()
            .subscribe(categories => this.categories = categories,
            error => this.errorMessage = <any>error);
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
    }
}

