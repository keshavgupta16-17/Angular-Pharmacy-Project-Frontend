import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../category';
import { Otcproduct } from '../otcproducts';
import { OtcProductService } from '../otcproducts.service';

@Component({
  selector: 'app-update-medicine',
  templateUrl: './update-medicine.component.html',
  styleUrls: ['./update-medicine.component.css']
})
export class UpdateMedicineComponent implements OnInit {

  categories: Category[] = [];

  product: Otcproduct = new Otcproduct(0,"", new Category(0,'',''), "", 0);

  message: string = '';
  success: boolean = false;

  constructor(private service: OtcProductService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let productId: number = 0;

    this.service.getAllCategories().subscribe(data => {
      console.log(data);
      this.categories = data;

      this.activatedRoute.params.subscribe(data => {
        productId = data.id;
        this.service.getProduct(productId).subscribe(response => {
          console.log(response);
          this.product = response;
  
        });
        
      });
    });

    
  }

  onUpdate() {
    let categoryName: string = this.product.category.name;
    //console.log(categoryName);
    this.categories.forEach(category => {
      if(category.name === categoryName) {
        this.product.category.categoryId = category.categoryId;
      }
    });
    
    console.log(this.product);
    this.service.updateProduct(this.product).subscribe(data => {
      console.log('response',data);
      if(data) {
        this.success = true;
        alert("Medicine updated successfully");
      this.router.navigateByUrl("/admin-dashboard/view-medicine");
       // this.message = "Medicine updated successfully";
        
      }
      else {
        this.success = false;
        //this.message = "Problem updating data";
        alert("Problem on updating data");
      }
      //this.router.navigateByUrl("/products/viewAll");
      this.router.navigateByUrl("/admin-dashboard/view-medicine");

    })


  }

}

