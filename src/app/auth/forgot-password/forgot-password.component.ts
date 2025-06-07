import { Component } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { Auth, sendPasswordResetEmail } from '@angular/fire/auth';
@Component({
  selector: 'app-forgot-password',
 
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {
  authform!: FormGroup;
  errormsg: string = '';
  isLoading: boolean = false;
  constructor(private auth: Auth) {
    this.initForm();
  }
  onSubmit() {
    if (this.authform.valid) {
      this.isLoading = true; // Set loading state
      // Handle the form submission logic here
      debugger
      sendPasswordResetEmail(this.auth, this.authform.value.email)
        .then((response) => {
        this.isLoading = false; // Reset loading state
        }).catch((error) => {
          // Handle errors here
          this.errormsg = error.message;
          console.error('Error sending password reset email:', error);  
        });
    } else {
      // Handle the case where the form is invalid
      console.log('Form is invalid');
    }
  }
  initForm() {
    this.authform = new FormGroup({
      email: new FormControl('', [Validators.required]),
    });
  }
}
