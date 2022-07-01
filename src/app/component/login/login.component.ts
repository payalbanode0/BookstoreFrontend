import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserserviceService } from 'src/app/services/userService/userservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup;
  submitted =false;
  token:any
  users='1'

  constructor(private formBuilder : FormBuilder ,private user:UserserviceService,private router:Router,private snackBar: MatSnackBar) {
    this.token=localStorage.getItem("token");
   }

  ngOnInit(): void {
    localStorage.setItem('SessionUser',this.users)
    this.loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
 
  OnSubmitloginForm() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.valid) {    
      let reqData = {        
        email: this.loginForm.value.email,       
        password: this.loginForm.value.password,       
      }
      this.user.login(reqData).subscribe((response:any)=>{
        console.log(response);
        localStorage.setItem("token",response.data.token)
        this.router.navigateByUrl('/dashboard')
        this.snackBar.open('Login successfully', '', {
          duration:2000,
         }); 
      }) 
    //  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
}
  }
}