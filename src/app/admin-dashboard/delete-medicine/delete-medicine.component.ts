import { Component, OnInit } from '@angular/core';
import {Otcproduct} from '../otcproducts';
import { ActivatedRoute, Router } from '@angular/router';
import { OtcProductService } from '../otcproducts.service';

@Component({
  selector: 'app-delete-medicine',
  templateUrl: './delete-medicine.component.html',
  styleUrls: ['./delete-medicine.component.css']
})
export class DeleteMedicineComponent implements OnInit {

  message: String = "";

  constructor(private service: OtcProductService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let productId: number = 0;  

    this.activatedRoute.params.subscribe(data => {
      productId = data.id;
      console.log(productId);
      this.service.deleteProduct(productId).subscribe(response => {
        console.log(response);
        let isDeleted: boolean = response;
        console.log(isDeleted);
        if(isDeleted) {
          this.message = "Product deleted successfully!!!"
        } else {
          this.message = "Unknown error occured";
        }
        this.router.navigateByUrl("/admin-dashboard/view-medicine");
      });
    });  
  }

}
