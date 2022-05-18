import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { ViewallProductComponent } from './product/viewall-product/viewall-product.component';
import { UpdateProductComponent } from './product/update-product/update-product.component';
import { DeleteProductComponent } from './product/delete-product/delete-product.component';
import { OtcproductsComponent } from './otcproducts/otcproducts.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AddMedicineComponent } from './admin-dashboard/add-medicine/add-medicine.component';
import { ViewMedicineComponent } from './admin-dashboard/view-medicine/view-medicine.component';
import { DeleteMedicineComponent } from './admin-dashboard/delete-medicine/delete-medicine.component';
import { AddCategoryComponent } from './admin-dashboard/add-category/add-category.component';
import { ViewallCategoryComponent } from './admin-dashboard/viewall-category/viewall-category.component';
import { DeleteCategoryComponent } from './admin-dashboard/delete-category/delete-category.component';
import { UpdateCategoryComponent } from './admin-dashboard/update-category/update-category.component';
import { UpdateMedicineComponent } from './admin-dashboard/update-medicine/update-medicine.component';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    ProductComponent,
    AddProductComponent,
    ViewallProductComponent,
    UpdateProductComponent,
    DeleteProductComponent,
    OtcproductsComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    AdminDashboardComponent,
    AddMedicineComponent,
    ViewMedicineComponent,
    DeleteMedicineComponent,
    AddCategoryComponent,
    ViewallCategoryComponent,
    DeleteCategoryComponent,
    UpdateCategoryComponent,
    UpdateMedicineComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
