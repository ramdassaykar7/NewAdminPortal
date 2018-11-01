
// import { UnauthenticatedGuard } from './guards/unauthenticated/unauthenticated.guard';
// import { AuthenticatedGuard } from './guards/authenticated/authenticated.guard';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './adminPortal/admin-login/admin-login.component';
import { DashComponent } from './adminPortal/dash/dash.component';
import { UnitMasterComponent } from './adminPortal/Master/unit-master/unit-master.component';
import { ItemMasterComponent } from './adminPortal/Master/item-master/item-master.component';
import { TypeMasterComponent } from './adminPortal/Master/type-master/type-master.component';
import { AreaMasterComponent } from './adminPortal/Master/area-master/area-master.component';
import { SocietyMasterComponent } from './adminPortal/Master/society-master/society-master.component';
import { cityMasterComponent } from './adminPortal/Master/city-master/city-master.component';
import { SupplierComponent } from './adminPortal/Master/supplier/supplier.component';
import { FlatMasterComponent } from './adminPortal/Master/flat-master/flat-master.component';
import { CustomerMasterComponent } from './adminPortal/Master/customer-master/customer-master.component';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { AdminLayoutComponent } from './adminPortal/layout/admin-layout/admin-layout.component';
import { SimpleLayoutComponent } from './adminPortal/layout/simple-layout/simple-layout.component';



const AppRoute: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    // canActivate: [UnauthenticatedGuard]
  },
  // {
  //   path: 'forgot',
  //   component: ForgotPasswordComponent,
  //   canActivate: [UnauthenticatedGuard]
  // },
    { 
      path: '',
      component: DashComponent,
      canActivate: [AuthGuard],
      children: [
        {path:'Admin',component:  SimpleLayoutComponent 
        },
         { path: 'unit-master', component: UnitMasterComponent},
     { path: 'item-master', component: ItemMasterComponent },
    { path: 'type-master', component: TypeMasterComponent },
    { path: 'area-master', component: AreaMasterComponent },
    { path: 'society-master', component: SocietyMasterComponent },
    { path: 'city-master', component: cityMasterComponent },
    { path: 'suplier-masteer', component: SupplierComponent },
    { path: 'flat-master', component: FlatMasterComponent },
    { path: 'customer-master', component: CustomerMasterComponent },
    {
      path: '**',
      redirectTo: 'Admin'
    }
  ]
  },
  ]

@NgModule({
  imports: [RouterModule.forChild(AppRoute)],
  exports: [RouterModule],
  providers: [AuthService,AuthGuard],
})
export class AppRoutingModule { }