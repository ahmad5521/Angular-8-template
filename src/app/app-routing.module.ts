import { CustomerListComponent } from './customerList/customerList.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { IndexComponent } from './index/index.component'; 
import { ProductDetailsComponent } from './product-detailes/product-details.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ListSpecificComponent } from './specific/index.component';
import { LoginComponent } from './Login/login.component';
import { ServiceComponent } from './service/service.component'; 
import { PackageComponent } from './package/package.component'; 
import { PackageDetailsComponent } from './packageDetails/package-details.component';
import { ServiceDetailsComponent } from './serviceDetails/service-details.component';
import { CustomerProfileComponent } from './customerProfile/customerProfile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlatformServicesComponent } from './platformServices/platformServices.component';
import { UCPComponent } from './ucp/index.component';


const routes: Routes = [
  {    path: '', component: IndexComponent  }, 
  {    path: 'productDetails', component: ProductDetailsComponent  },
  {    path: 'addProduct', component: AddProductComponent  },
  {    path: 'specifics', component: ListSpecificComponent  },
  {    path: 'login', component: LoginComponent  },
  {    path: 'Services', component: ServiceComponent  },
  {    path: 'Packages', component: PackageComponent  },
  {    path: 'PackageDetails', component: PackageDetailsComponent  },
  {    path: 'ServiceDetails', component: ServiceDetailsComponent  },
  {    path: 'customerList', component: CustomerListComponent  },
  {    path: 'customerProfile', component: CustomerProfileComponent  },
  {    path: 'Dashboard', component: DashboardComponent  },
  {    path: 'PlatformService', component: PlatformServicesComponent  },
  {    path: 'ucp', component: UCPComponent  },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
