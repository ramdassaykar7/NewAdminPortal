import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './adminPortal/admin-login/admin-login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { MatTableModule, MatCardModule, MatSortModule, MatPaginatorModule, MatDialogModule, 
         MatButtonModule, MatSnackBarModule } from '@angular/material';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { ToastrModule } from 'ngx-toastr';
import { UnitMasterComponent } from './adminPortal/Master/unit-master/unit-master.component';
import { HeaderComponent } from './adminportal/dashboard/header/header.component';
import { FooterComponent } from './adminportal/dashboard/footer/footer.component';
import { SettingComponent } from './adminportal/dashboard/setting/setting.component';
import { MenuComponent } from './adminPortal/Dashboard/Sidebar/menu.component';
import { ItemMasterComponent } from './adminPortal/Master/item-master/item-master.component';
import { AddItemComponent } from './adminPortal/Master/item-master/add-item/add-item.component';
import { AddUnitDataComponent } from './adminPortal/Master/unit-master/add-unit-data/add-unit-data.component';
import { DeleteUnitDataComponent } from './adminPortal/Master/unit-master/delete-unit-data/delete-unit-data.component';
import { AddcityDataComponent } from './adminPortal/Master/city-master/add-city-data/add-city-data.component';
import { cityMasterComponent } from './adminPortal/Master/city-master/city-master.component';
import { SupplierComponent } from './adminPortal/Master/supplier/supplier.component';
import { AddSupplierComponent } from './adminPortal/Master/supplier/add-supplier/add-supplier.component';
import { FlatMasterComponent } from './adminPortal/Master/flat-master/flat-master.component';
import { AreaMasterComponent } from './adminPortal/Master/area-master/area-master.component';
import { AddAreaComponent } from './adminPortal/Master/area-master/add-area/add-area.component';
import { SocietyMasterComponent } from './adminPortal/Master/society-master/society-master.component';
import { AddSocietyComponent } from './adminPortal/Master/society-master/add-society/add-society.component';
import { TypeMasterComponent } from './adminPortal/Master/type-master/type-master.component';
import { AddTypeComponent } from './adminPortal/Master/type-master/add-type/add-type.component';
import { AddFlatComponent } from './adminPortal/Master/flat-master/add-flat/add-flat.component';
import { CustomerMasterComponent } from './adminPortal/Master/customer-master/customer-master.component';
import { AddCustomerComponent } from './adminPortal/Master/customer-master/add-customer/add-customer.component';
import { DashComponent } from './adminPortal/dash/dash.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from '@pluritech/auth-service';
import { AuthGuard } from './auth.guard';
import { AdminLayoutComponent } from './adminPortal/layout/admin-layout/admin-layout.component';
import { SimpleLayoutComponent } from './adminPortal/layout/simple-layout/simple-layout.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UnitMasterComponent,
    ItemMasterComponent,
    cityMasterComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    SettingComponent,
    UnitMasterComponent,
    AddItemComponent,
    AddUnitDataComponent,
    DeleteUnitDataComponent,
    AddcityDataComponent,
    SupplierComponent,
    AddSupplierComponent,
    FlatMasterComponent,
    AreaMasterComponent,
    AddAreaComponent,
    TypeMasterComponent,
    AddTypeComponent,
    SocietyMasterComponent,
    AddSocietyComponent,
    AddFlatComponent,
    CustomerMasterComponent,
    AddCustomerComponent,
    AdminLayoutComponent,
    SimpleLayoutComponent,
    DashComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatTableModule, MatSortModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatCardModule,
    AppRoutingModule,
    RouterModule.forRoot([]),
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatTooltipModule,
    CommonModule,
  //  ToastrModule.forRoot(),
    MatSnackBarModule
  ],
  entryComponents: [
    AddUnitDataComponent,
    DeleteUnitDataComponent,
    AddItemComponent,
    AddAreaComponent,
    AddSocietyComponent,
    AddTypeComponent,
    AddcityDataComponent,
    AddFlatComponent,
    AddSupplierComponent,
    AddCustomerComponent
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }