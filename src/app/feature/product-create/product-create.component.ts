import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent {
  title: string = 'Product-Create';
  product: Product = new Product();
  submitBtnTitle: string = 'Create';

  constructor(
    private productSvc: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  save() {
    this.productSvc.create(this.product).subscribe(
      resp => {
        this.product = resp as Product;
        this.router.navigateByUrl("/product-list");
      }
    );

  }
}
