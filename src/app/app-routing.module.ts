import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  {path:'',component:LoginPageComponent},
  {path:'signup',component:SignupComponent},
  {path:'forgot-password',component:ForgotPasswordComponent},
  {path:'landing-page',component:LandingPageComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
