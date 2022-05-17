import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../category';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  categories: Category[] = [];

  category: Category = new Category(0,"","");

  message: string = '';
  success: boolean = false;

  constructor(private service: CategoryService, private router: Router) { }

  ngOnInit() {
    this.service.getAllCategories().subscribe(data => {
      console.log(data);
      this.categories = data;
    });
  }

  onSubmit() {
    //console.log(this.prod);
   // let categoryName: string = this.product.category.name;
    //console.log(categoryName);
    

   /* this.categories.forEach(category => {
     

      if(category.name === categoryName) {
        this.product.category.categoryId = category.categoryId;
      }
    });*/
    console.log(this.category);
    this.service.addCategory(this.category).subscribe(data => {
      console.log('response',data);
      if(data) {
        this.success = true;
        //this.message = "Category added successfully";
        alert("Category added successfully");
      }
      else {
        this.success = false;
        //this.message = "Problem adding data";
        alert("Problem adding data");
      }

     //this.product = new OtcProductService(0,"", new Category(0,'',''), "", 0);
     this.router.navigateByUrl("/admin-dashboard/viewall-category");

    })


  }

}

