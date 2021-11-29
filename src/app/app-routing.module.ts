import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CategoriesComponent } from './categories/categories.component';


const routes: Routes = [
  {path:'',component:LoginPageComponent},
  {path:'signup',component:SignupComponent},
  {path:'Forgot',component:ForgotPasswordComponent},
  {path:'landing-page',component:LandingPageComponent},
  {path:'sub',component:LoginPageComponent},
  {path:'login',component:LoginPageComponent},
  {path:'categories',component:CategoriesComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
