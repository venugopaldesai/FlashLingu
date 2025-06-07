import { Component, inject } from '@angular/core';
import { Auth,authState,signOut, User } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { UserResolverService } from '../services/userresolver.service';
import { filter, map } from 'rxjs';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  auth=inject(Auth)
  route=inject(Router);
  userservice=inject(UserResolverService);
  signout(){
    signOut(this.auth).then((res)=>{
      this.route.navigate(['/auth/login']);
     
    }).catch((err)=>{
      console.log(err);
    })
  }

}
