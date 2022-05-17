import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { OtcproductsComponent } from './otcproducts/otcproducts.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { DeleteProductComponent } from './product/delete-product/delete-product.component';
import { ProductComponent } from './product/product.component';
import { UpdateProductComponent } from './product/update-product/update-product.component';
import { ViewallProductComponent } from './product/viewall-product/viewall-product.component';
import { ServicesComponent } from './services/services.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import {HomeComponent} from './home/home.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AddMedicineComponent } from './admin-dashboard/add-medicine/add-medicine.component';
import { ViewMedicineComponent } from './admin-dashboard/view-medicine/view-medicine.component';
import { DeleteMedicineComponent } from './admin-dashboard/delete-medicine/delete-medicine.component';
import { AddCategoryComponent } from './admin-dashboard/add-category/add-category.component';
import { ViewallCategoryComponent } from './admin-dashboard/viewall-category/viewall-category.component';
import { DeleteCategoryComponent } from './admin-dashboard/delete-category/delete-category.component';
import { UpdateCategoryComponent } from './admin-dashboard/update-category/update-category.component';
import { UpdateMedicineComponent } from './admin-dashboard/update-medicine/update-medicine.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'aboutus', component: AboutComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'otcproducts', component: OtcproductsComponent },
  {path: 'login', component: LoginComponent },
  {path: 'registration', component: RegistrationComponent},
  {path: 'home/login', component: LoginComponent },
  {path: 'home/registration', component: RegistrationComponent},
  /*{path:'admin-dashboard', component: AdminDashboardComponent},
  {path: 'admin-dashboard/add-medicine', component: AddMedicineComponent},
  {path: 'admin-dashboard/view-medicine', component: ViewMedicineComponent},
  {path: 'admin-dashboard/delete-medicine', component: DeleteMedicineComponent},
  {path: 'add-medicine', component: AddMedicineComponent},
  {path: 'view-medicine', component: ViewMedicineComponent},
  {path: 'delete-medicine', component: DeleteMedicineComponent},*/
  
  /*
  {path: 'product', component: ProductComponent},
  {path: 'product/add', component: AddProductComponent},
  {path: 'product/viewall', component: ViewallProductComponent},
  {path: 'product/update', component: UpdateProductComponent},
  {path: 'product/delete', component: DeleteProductComponent},  
  */
  {path: 'admin-dashboard', component: AdminDashboardComponent, 
  children: [
    {path: 'add-medicine', component: AddMedicineComponent},
    {path: 'view-medicine', component: ViewMedicineComponent},
    {path: 'update-medicine/:id', component: UpdateMedicineComponent},
   
    {path: 'delete-medicine/:id', component: DeleteMedicineComponent}, 

    {path: 'add-category', component: AddCategoryComponent},
    {path: 'viewall-category', component: ViewallCategoryComponent},
   
    {path: 'update-category/:id', component: UpdateCategoryComponent},
    {path: 'delete-category/:id', component: DeleteCategoryComponent}, 
  ]
},
  
  {path: 'product', component: ProductComponent, 
    children: [
      {path: 'add', component: AddProductComponent},
      {path: 'viewall', component: ViewallProductComponent},
      {path: 'update/:id', component: UpdateProductComponent},
     
      {path: 'delete', component: DeleteProductComponent}, 

    ]
  },

  /*{path:'admin-dashboard', component:AdminDashboardComponent,
children:[
  {path: 'add-medicine', component: AddMedicineComponent},
  {path: 'view-medicine', component: ViewMedicineComponent},
  {path: 'delete-medicine', component: DeleteMedicineComponent}, 

]
},
  */
   


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
