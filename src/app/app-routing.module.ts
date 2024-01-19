import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './feature/product-list/product-list.component';
import { LineItemListComponent } from './feature/line-item-list/line-item-list.component';
import { ProductCreateComponent } from './feature/product-create/product-create.component';
import { ProductEditComponent } from './feature/product-edit/product-edit.component';
import { ProductDetailComponent } from './feature/product-detail/product-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/product-list', pathMatch:'full'},
  { path: 'product-list', component: ProductListComponent},
  { path: 'product-create', component: ProductCreateComponent},
  { path: 'product-edit/:code', component: ProductEditComponent},
  { path: 'product-detail/:code', component: ProductDetailComponent},
  { path: 'li-list', component: LineItemListComponent},
  { path: '**', component: ProductListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
