import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = null;

  constructor() { 
    this.products = [
      new Product(101, 'TV', 'Samsung', 40000),
      new Product(102, 'AC', 'Samsung', 45000),
      new Product(103, 'TV', 'LG', 38000),
      new Product(104, 'AC', 'LG', 46000),
      new Product(105, 'Fridge', 'Samsung', 28000),
    ]
  }

  public getAllProducts(): Product[] {
    return this.products;
  }

  public getProductById(prodId: number) {

    let product: Product = null;
    for(let p of this.products) {
      
      if(p.prodId == prodId) {
        product = p;
        break;
      }
    }
    //console.log(product);
    return product;
  }
}
