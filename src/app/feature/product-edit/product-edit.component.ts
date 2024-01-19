import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent {
  title: string = 'Product-Edit';
  product: Product = new Product();
  submitBtnTitle: string = 'Edit';
  productCode: string = "";

  constructor(
    private productSvc: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(parms => this.productCode = parms["code"]);
    this.productSvc.get(this.productCode).subscribe(
      resp => {
        this.product = resp as Product;
      }
    );
  }

  save() {
    this.productSvc.edit(this.product).subscribe(
      resp => {
        this.product = resp as Product;
        this.router.navigateByUrl("/product-list");
      });
  }
}
