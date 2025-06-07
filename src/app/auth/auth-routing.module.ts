import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
const routes: Routes = [
   {
      path:'login',
      component:SigninComponent,
      title:'Cards'
    },
    {
      path: 'register',
      component: SignupComponent,
      title:'Home'
    },
    {
      path: 'forgot-password',
      component:ForgotPasswordComponent,
      title:'Forgot Password'
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
