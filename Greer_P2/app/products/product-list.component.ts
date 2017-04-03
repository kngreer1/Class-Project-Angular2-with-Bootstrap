import { Component, OnInit, OnDestroy }  from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { Subscription }       from 'rxjs/Subscription';

import { IProduct } from './product';
import { ICategory } from './category'
import { ProductService } from './product.service';

import { CategoryService } from './category.service'

@Component({
    templateUrl: 'app/products/product-list.component.html',
    styleUrls: ['app/products/product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    product: IProduct[];
    category: ICategory;
    private sub: Subscription;
    errorMessage: string;

    products: IProduct[];

    constructor(private _categoryService: CategoryService,
        private _productService: ProductService,
        private _router: Router,
        private _route: ActivatedRoute) {

    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        this.sub = this._route.params.subscribe(
            params => {
                let id = +params['id'];
                this.getProduct(id);
            });
    }

    getProduct(id: number) {
        this._productService.getProductInCategory(id).subscribe(
            product => this.product = product,
            error => this.errorMessage = <any>error);
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    onBack(): void {
        this._router.navigate(['/categories']);
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
    }
}
