import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserserviceService } from 'src/app/services/userService/userservice.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
 export class RegistrationComponent implements OnInit {

   registerForm!: FormGroup
   submitted = false;

   constructor(private formBuilder: FormBuilder,private user:UserserviceService,private snackbar:MatSnackBar) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      phone  : ['', Validators.required],
     });

   }
  
   onSubmit(){
    this.submitted=true;
    console.log("inputs", this.registerForm.value);
    if(this.registerForm.valid){
      console.log("valid-Details",this.registerForm.value);
      let data= {
        FullName:this.registerForm.value.fullName,
        Email:this.registerForm.value.email,
          Password:this.registerForm.value.password,
          MobileNumber:this.registerForm.value.phone,
      }
      this.user.register(data).subscribe((res:any)=>{
        console.log(res);
        this.snackbar.open('Add Feedback  sucessfully', '', {
          duration:2000,
         }); 
  
      })
    }
      else{
        console.log("Enter valid data");
      }  

}
}
  
 