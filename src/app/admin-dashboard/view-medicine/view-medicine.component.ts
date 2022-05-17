import { Component, OnInit } from '@angular/core';
import {Otcproduct} from '../otcproducts';
import { OtcProductService } from '../otcproducts.service';

@Component({
  selector: 'app-view-medicine',
  templateUrl: './view-medicine.component.html',
  styleUrls: ['./view-medicine.component.css']
})
export class ViewMedicineComponent implements OnInit {

  products: Otcproduct[] = null;

  constructor(private service: OtcProductService) { 
    //this.products = service.products;
    //this.products = service.getAllProducts();
    this.service.getAllProducts().subscribe(data => {
      this.products = data;
    });
  }

  ngOnInit() {
  }

  

}
