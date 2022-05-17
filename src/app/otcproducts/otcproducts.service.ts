import { Injectable } from '@angular/core';
import {Otcproduct} from './otcproducts';

@Injectable({
  providedIn: 'root'
})
export class OtcProductService {

  private products: Otcproduct[] = null;

  constructor() { 
    this.products = [
      new Otcproduct(101, 'Bioderma', 'Cipla', 55,'Bioderma'),
      new Otcproduct(102, 'Chanca Piedra', 'Cipla', 70,'Chanca Piedra'),
      new Otcproduct(103, 'Umcka Cold Care', 'Akums', 120,'Umcka Cold Care'),
      new Otcproduct(104, 'Cetyl Pure', 'Akums', 20,'Cetyl Pure'),
      new Otcproduct(105, 'CLA Core', 'Jolly Pharma', 38,'CLA Core'),
      new Otcproduct(106,'Poo Pourri','Akums',38,'Poo Pourri'),
    ]
  }

  public getAllProducts(): Otcproduct[] {
    return this.products;
  }

  public getProductById(prodId: number) {

    let product: Otcproduct = null;
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
