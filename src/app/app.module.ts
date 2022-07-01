import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ReactiveFormsModule,FormsModule, FormGroup } from '@angular/forms';
import { MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import { LoginComponent } from './component/login/login.component';
import {MatDialogModule} from '@angular/material/dialog';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatRadioModule} from '@angular/material/radio';
import { HttpClientModule } from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule } from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import { RegistrationComponent } from './component/registration/registration.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import {MatCardModule} from '@angular/material/card';
import { ResetpasswordComponent } from './component/resetpassword/resetpassword.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import { GetallbookComponent } from './component/getallbook/getallbook.component';
import { QuickviewComponent } from './component/quickview/quickview/quickview.component';
import { CartComponent } from './component/cart/cart/cart.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  RegistrationComponent,
  ForgotPasswordComponent,
  ResetpasswordComponent,
  DashboardComponent,
  GetallbookComponent,
  QuickviewComponent,
  CartComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,MatIconModule,
    BrowserAnimationsModule,MatDialogModule,MatSelectModule,
    MatFormFieldModule,MatButtonModule,
    MatInputModule,HttpClientModule,MatCardModule,
    MatTabsModule,
    FormsModule,
    FlexLayoutModule,
    MatRadioModule,MatSnackBarModule,
    
    ReactiveFormsModule,
    MatMenuModule,
    MatDividerModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
