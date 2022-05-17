import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Category } from './category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private _httpClient: HttpClient) { }

  /*getAllProducts(): Product[] {
    return this.products;
  }*/

 /* getAllProducts(): Observable<Category[]> {
    let url = "http://localhost:9393/api/products";
    return this._httpClient.get<Category[]>(url).pipe(map(response => response));
  }*/

  getCategory(categoryId: number): Observable<Category> {
    let url = "http://localhost:9393/api/categories/"+categoryId;
    return this._httpClient.get<Category>(url).pipe(map(response => response));
  }

  getAllCategories():Observable<Category[]> {
    let url = "http://localhost:9393/api/categories";
    return this._httpClient.get<Category[]>(url).pipe(map(response => response));
  }

  

  addCategory(category: Category): Observable<Category> {
    let url = "http://localhost:9393/api/categories";
    console.log(url);
    return this._httpClient.post<Category>(url, category);   
     
  }

  updateCategory(category: Category): Observable<Category> {
    let url = "http://localhost:9393/api/categories/"+category.categoryId;
    console.log(url);
    return this._httpClient.put<Category>(url, category);   
     
  }

  deleteCategory(categoryId: number): Observable<boolean> {
    let url = "http://localhost:9393/api/categories/category/"+categoryId;
    console.log(url);
    let returnVal: Observable<boolean> =  this._httpClient.delete<boolean>(url);  
    return returnVal; 
     
  }

  
}
