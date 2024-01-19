import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  title: string = "Product-List";
  products: Product[] = [];
    // default sort column to id (assumes table has an id field)
    sortCriteria: string = 'productCode';
    // default sort criteria of ascending
    sortOrder: string = 'asc';
    subscription!: Subscription;
  

  constructor(
    private productSvc: ProductService
  ) { }
  
  ngOnInit(): void {
    console.log("In product list component.");
    this.subscription = this.productSvc.list().subscribe({
      next: (resp) => {
        console.log(resp);
        this.products = resp;
        console.log("Products list:");
        for (let prod: Product of this.products) {
          console.log(prod);
        }
      }
    });
  }

  sortBy(column: string): void {
    console.log("product list sortBy called")
    if(column == this.sortCriteria){
      this.sortOrder = (this.sortOrder == "desc") ? "asc" : "desc";
    }
    this.sortCriteria = column;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
