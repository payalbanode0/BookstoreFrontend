import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './component/cart/cart/cart.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { GetallbookComponent } from './component/getallbook/getallbook.component';
import { LoginComponent } from './component/login/login.component';
import { QuickviewComponent } from './component/quickview/quickview/quickview.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { ResetpasswordComponent } from './component/resetpassword/resetpassword.component';

const routes: Routes = [
  { path: 'registration', component:RegistrationComponent  },
  {path:'',redirectTo:"/login",pathMatch:'full'},
  {path:'login', component:LoginComponent},
  { path: 'forgotpassword', component: ForgotPasswordComponent },
  { path: 'resetpassword/:token', component: ResetpasswordComponent },
  {
    path: 'dashboard', component: DashboardComponent, 
    children: [
      { path:'getallbook', component: GetallbookComponent },
      {path:'quickview',component:QuickviewComponent},
      {path:'cart',component:CartComponent}
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
