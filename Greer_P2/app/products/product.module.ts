import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductDetailGuard } from './product-guard.service';
import { CategoriesListComponent } from './categories-list.component';

import { ProductFilterPipe } from './product-filter.pipe';
import { ProductService } from './product.service';
import { CategoryService } from './category.service'

import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      { path: 'product/:id',
        canActivate: [ ProductDetailGuard],
        component: ProductDetailComponent
      },
      { path: 'categories', component: CategoriesListComponent },
      { path: 'categories/:id',
          canActivate: [ProductDetailGuard],
          component: ProductListComponent
    }
    ])
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductFilterPipe,
    CategoriesListComponent
 
  ],
  providers: [
      ProductService,
      CategoryService,
      ProductDetailGuard
  ]
})
export class ProductModule {}
