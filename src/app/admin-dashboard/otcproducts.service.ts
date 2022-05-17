import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Category } from './category';
import {Otcproduct} from './otcproducts';

@Injectable({
  providedIn: 'root'
})
export class OtcProductService {

 /*private products: Product[] = [
    new Product(101, "LED TV", new Category(1, "Electronics","All Electronic Products"), "Samsung", 35000),
    new Product(102, "LCD TV", new Category(1, "Electronics","All Electronic Products"), "Samsung", 25000),
    new Product(103, "Inverter AC", new Category(1, "Electronics","All Electronic Products"), "Samsung", 50000),
    new Product(104, "Note2", new Category(2, "Mobiles","All Mobile Products"), "Samsung", 20000),
    new Product(105, "Note Pro", new Category(2, "Mobiles","All Mobile Products"), "MI", 24000),
  ]*/

  constructor(private _httpClient: HttpClient) { }

  /*getAllProducts(): Product[] {
    return this.products;
  }*/

  getAllProducts(): Observable<Otcproduct[]> {
    let url = "http://localhost:9393/api/products";
    return this._httpClient.get<Otcproduct[]>(url).pipe(map(response => response));
  }

  getProduct(productId: number): Observable<Otcproduct> {
    let url = "http://localhost:9393/api/products/"+productId;
    return this._httpClient.get<Otcproduct>(url).pipe(map(response => response));
  }

  getAllCategories():Observable<Category[]> {
    let url = "http://localhost:9393/api/categories";
    return this._httpClient.get<Category[]>(url).pipe(map(response => response));
  }

  

  addProduct(product: Otcproduct): Observable<Otcproduct> {
    let url = "http://localhost:9393/api/categories/"+product.category.categoryId+"/products";
    console.log(url);
    return this._httpClient.post<Otcproduct>(url, product);   
     
  }

  updateProduct(product: Otcproduct): Observable<Otcproduct> {
    let url = "http://localhost:9393/api/products/"+product.productId;
    console.log(url);
    return this._httpClient.put<Otcproduct>(url, product);   
     
  }

  deleteProduct(productId: number): Observable<boolean> {
    let url = "http://localhost:9393/api/products/"+productId;
    console.log(url);
    let returnVal: Observable<boolean> =  this._httpClient.delete<boolean>(url);  
    return returnVal; 
     
  }

  
}
