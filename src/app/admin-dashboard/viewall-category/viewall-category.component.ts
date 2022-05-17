import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { CategoryService } from '../category.service';
@Component({
  selector: 'app-viewall-category',
  templateUrl: './viewall-category.component.html',
  styleUrls: ['./viewall-category.component.css']
})
export class ViewallCategoryComponent implements OnInit {

  products: Category[] = null;

  constructor(private service: CategoryService) { 
    //this.products = service.products;
    //this.products = service.getAllProducts();
    this.service.getAllCategories().subscribe(data => {
      this.products = data;
    });
  }

  ngOnInit() {
  }

  

}
