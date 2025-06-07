import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard, redirectLoggedInTo, redirectUnauthorizedTo} from '@angular/fire/auth-guard';
import { WelcomeComponent } from './feature/welcome/welcome.component';
import { UserResolverService } from './services/userresolver.service';

const redirectToLogin = () => redirectUnauthorizedTo('/auth/login');
const redirectToHome = () => redirectLoggedInTo('/feature/home');
const routes: Routes = [
 {
path: '',

component: WelcomeComponent,
canActivate: [AuthGuard],
data: { authGuardPipe: redirectToHome },
 },

 {
  path:'auth',
  loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule1),
 },
 {
  path:'home',
  redirectTo: 'feature/home',
  pathMatch: 'full',
  
 },
 {
  path:'cards',
  redirectTo: 'feature/cards',
  pathMatch: 'full'
 },
 {
  path:'feature',
  loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule),
  canActivate:[AuthGuard],
  data: { authGuardPipe: redirectToLogin },
  resolve:{
    user: UserResolverService
  }
 },
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
function redirectToUnauthorized(arg0: string) {
  throw new Error('Function not implemented.');
}

