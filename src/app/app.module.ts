import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { HeaderComponent } from './header/header.component'; 
import { IndexComponent } from './index/index.component'; 
import { MainNavComponent } from './main-nav/main-nav.component';
import { ProductDetailsComponent } from './product-detailes/product-details.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ListSpecificComponent } from './specific/index.component';
import { UCPComponent } from './ucp/index.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {PanelModule} from 'primeng/panel';
import { InputSwitchModule } from 'primeng/inputswitch';
import { DataViewModule } from 'primeng/dataview';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import {ToggleButtonModule} from 'primeng/togglebutton';
import { LoginComponent } from './Login/login.component';
import { ServiceComponent } from './service/service.component';
import { PackageComponent } from './package/package.component'; 
import {AutoCompleteModule} from 'primeng/autocomplete';
import {MultiSelectModule} from 'primeng/multiselect';
import {TieredMenuModule} from 'primeng/tieredmenu';
import { PackageDetailsComponent } from './packageDetails/package-details.component';
import { ServiceDetailsComponent } from './serviceDetails/service-details.component';
import {FileUploadModule} from 'primeng/fileupload';
import { HttpClientModule } from '@angular/common/http';

import {PickListModule} from '../../node_modules/primeng/picklist';
import { CustomerListComponent } from './customerList/customerList.component';
import { CustomerProfileComponent } from './customerProfile/customerProfile.component';
import {ChartModule} from 'primeng/chart';
import { DashboardComponent } from './dashboard/dashboard.component';
import {CalendarModule} from 'primeng/calendar';
import { PlatformServicesComponent } from './platformServices/platformServices.component';


@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      IndexComponent,
      MainNavComponent,
      ProductDetailsComponent,
      AddProductComponent,
      ListSpecificComponent,
      LoginComponent,
      ServiceComponent,
      PackageComponent,
      PackageDetailsComponent,
      ServiceDetailsComponent,
      CustomerListComponent,
      CustomerProfileComponent,
      DashboardComponent,
      PlatformServicesComponent,
      UCPComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      PanelModule,
      BrowserAnimationsModule,
      InputSwitchModule,
      DataViewModule,
      CardModule,
      TableModule,
      DropdownModule,
      FormsModule,
      ConfirmDialogModule,
      ToggleButtonModule,
      AutoCompleteModule,
      MultiSelectModule,
      FileUploadModule,
      HttpClientModule,
      PickListModule,
      TieredMenuModule,
      ChartModule,
      CalendarModule
   ],
   providers: [
      ConfirmationService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
