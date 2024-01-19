import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './feature/product-list/product-list.component';
import { LineItemListComponent } from './feature/line-item-list/line-item-list.component';
import { MenuComponent } from './core/menu/menu.component';
import { ProductCreateComponent } from './feature/product-create/product-create.component';
import { ProductEditComponent } from './feature/product-edit/product-edit.component';
import { ProductDetailComponent } from './feature/product-detail/product-detail.component';
import { SortPipe } from './pipe/sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    LineItemListComponent,
    MenuComponent,
    ProductCreateComponent,
    ProductEditComponent,
    ProductDetailComponent,
    SortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
