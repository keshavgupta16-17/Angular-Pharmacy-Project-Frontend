import { Component, OnInit } from '@angular/core';
import { Medicine } from './add-medicine';
import { Category } from '../category';
import { Router } from '@angular/router';
import { Otcproduct } from '../otcproducts';
import { OtcProductService } from '../otcproducts.service';

@Component({
  selector: 'app-add-medicine',
  templateUrl: './add-medicine.component.html',
  styleUrls: ['./add-medicine.component.css']
})
export class AddMedicineComponent implements OnInit {

  categories: Category[] = [];

  product: Otcproduct = new Otcproduct(0,"", new Category(0,'',''), "", 0);

  message: string = '';
  success: boolean = false;

  constructor(private service: OtcProductService, private router: Router) { }

  ngOnInit() {
    this.service.getAllCategories().subscribe(data => {
      console.log(data);
      this.categories = data;
    });
  }

  onSubmit() {
    //console.log(this.prod);
    let categoryName: string = this.product.category.name;
    //console.log(categoryName);
    

    this.categories.forEach(category => {
      /*if(category.categoryName === this.product.category.categoryName) {
        this.product.category.categoryId = category.categoryId;
      }*/

      if(category.name === categoryName) {
        this.product.category.categoryId = category.categoryId;
      }
    });
    console.log(this.product);
    this.service.addProduct(this.product).subscribe(data => {
      console.log('response',data);
      if(data) {
        this.success = true;
        //this.message = "Medicine added successfully";
        alert("Medicine added successfully");
        
      }
      else {
        this.success = false;
        alert("Problem adding data");
        //this.message = "Problem adding data";
      }

     //this.product = new OtcProductService(0,"", new Category(0,'',''), "", 0);
      this.router.navigateByUrl("/admin-dashboard/view-medicine");

    })


  }

}

