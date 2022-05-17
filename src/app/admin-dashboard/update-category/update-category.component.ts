import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../category';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {

  categories: Category[] = [];

  product: Category = new Category(0,"","");

  message: string = '';
  success: boolean = false;

  constructor(private service: CategoryService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let categoryId: number = 0;
/*
    this.service.getAllCategories().subscribe(data => {
      console.log(data);
      this.categories = data;
*/
      this.activatedRoute.params.subscribe(data => {
        categoryId = data.id;
        this.service.getCategory(categoryId).subscribe(response => {
          console.log(response);
          this.product = response;
  
        });
        
      });
    //});

    
  }

  onUpdate() {
  //console.log(this.prod);
   // let categoryName: string = this.product.category.name;
    //console.log(categoryName);
    

   /* this.categories.forEach(category => {
     

      if(category.name === categoryName) {
        this.product.category.categoryId = category.categoryId;
      }
    });*/
    
    console.log(this.product);
    this.service.updateCategory(this.product).subscribe(data => {
      console.log('response',data);
      if(data) {
        this.success = true;
        //this.message = "Category updated successfully";
        alert("Category updated successfully");
        
      }
      else {
        this.success = false;
        //this.message = "Problem updating data";
        alert("Problem updating data");
      }
      //this.router.navigateByUrl("/products/viewAll");
      this.router.navigateByUrl("/admin-dashboard/viewall-category");

    })


  }

}


