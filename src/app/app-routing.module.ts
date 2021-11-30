import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductComponent } from './product/product.component';
import { Product1HandloomComponent } from './product1-handloom/product1-handloom.component';
import { Product2Component } from './product2/product2.component';
import { Product3Component } from './product3/product3.component';
import { Product4Component } from './product4/product4.component';



const routes: Routes = [
  {path:'',component:LoginPageComponent},
  {path:'signup',component:SignupComponent},
  {path:'Forgot',component:ForgotPasswordComponent},
  {path:'landing-page',component:LandingPageComponent},
  {path:'sub',component:LoginPageComponent},
  {path:'login',component:LoginPageComponent},
  {path:'categories',component:CategoriesComponent},
  {path:'product',component:ProductComponent},
  {path:'product1-handloom',component:Product1HandloomComponent},
  {path:'product2',component:Product2Component},
  {path:'product3',component:Product3Component},
  {path:'product4',component:Product4Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
