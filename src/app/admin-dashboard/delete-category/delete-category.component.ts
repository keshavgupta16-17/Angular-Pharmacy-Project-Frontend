import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-category',
  templateUrl: './delete-category.component.html',
  styleUrls: ['./delete-category.component.css']
})
export class DeleteCategoryComponent implements OnInit {
 
  message: String = "";

  constructor(private service: CategoryService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let categoryId: number = 0;  

    this.activatedRoute.params.subscribe(data => {
      categoryId = data.id;
      console.log(categoryId);
      this.service.deleteCategory(categoryId).subscribe(response => {
        console.log(response);
        let isDeleted: boolean = response;
        console.log(isDeleted);
        if(isDeleted) {
          this.message = "Category deleted successfully!!!"
        } else {
          this.message = "Unknown error occured";
        }
        this.router.navigateByUrl("/admin-dashboard/viewall-category");
      });
    });  
  }

}
