import { Component, inject } from '@angular/core';
import { Auth,GoogleAuthProvider,createUserWithEmailAndPassword,signInWithPopup } from '@angular/fire/auth';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
 username: string = '';
 password: string='';
 
 googleprovider = new GoogleAuthProvider();
 errormsg: string = '';
 isLoading: boolean = false;
 auth=inject(Auth);
 route = inject(Router);
 authform!: FormGroup;
 
 constructor(){
   this.initForm();
 }
 
 initForm(){
   this.authform = new FormGroup({
     username: new FormControl(null, Validators.required),
     password: new FormControl(null, Validators.required)
   });
 }
 
 onSubmit(){
   if(this.authform.valid){
     
     this.isLoading = true;
     createUserWithEmailAndPassword(this.auth,this.authform.value.username, this.authform.value.password).then((res)=>{
       this.route.navigate(['/featue/home']);
       this.isLoading = false;
     }).catch((err)=>{
       console.log(err);
       this.errormsg = err.message;
       this.isLoading = false;
     });
 
   }else{
     return;
   }}
 
 onSignIn(){
 
 }
 onSignUp(){
 
 }
 ongoogleSignUp(){
   signInWithPopup(this.auth,this.googleprovider).then((res)=>{
     this.route.navigate(['/feature/home']);
   }
   ).catch((err)=>{
     console.log(err);
     this.errormsg = err.message;
   }
   );
   this.isLoading = true;
 }
}
