import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  product: Product = null;

  constructor(private _activatedRoute: ActivatedRoute, private _service: ProductService) { }

  ngOnInit() {
    let productId: number = 0;
    this._activatedRoute.params.subscribe(data => {
      console.log(data);
      productId = data.id;
      this.product = this._service.getProductById(productId);    
    })
  }

}
