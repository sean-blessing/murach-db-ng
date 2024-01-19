import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  title: string = 'Product-Detail';
  product: Product = new Product();
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
      });
  }

  delete() {
    this.productSvc.delete(this.productCode).subscribe(
      resp => {
        this.product = resp as Product;
        this.router.navigateByUrl('/product-list');
      }
    );
  }
}
