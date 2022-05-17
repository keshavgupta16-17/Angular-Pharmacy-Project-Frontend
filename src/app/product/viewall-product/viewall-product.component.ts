import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-viewall-product',
  templateUrl: './viewall-product.component.html',
  styleUrls: ['./viewall-product.component.css']
})
export class ViewallProductComponent implements OnInit {

  products: Product[] = null;
  constructor(private _service: ProductService) { }

  ngOnInit() {
    this.products = this._service.getAllProducts();
  }

}
