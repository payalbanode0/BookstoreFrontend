import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserserviceService } from 'src/app/services/userService/userservice.service';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {

  resetPasswordForm!: FormGroup;
  submitted = false;
  token: any


  constructor(private forrmBuilder: FormBuilder, private user: UserserviceService,private activateRoute:ActivatedRoute ,private snackbar:MatSnackBar) { }

  ngOnInit(): void {
    this.token = this.activateRoute.snapshot.paramMap.get('token');

    this.resetPasswordForm = this.forrmBuilder.group({
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmNewPassword: ['', Validators.required],
    });

    console.log(this.token);
  }
  OnSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.resetPasswordForm.valid) {
      let reqData = {
        newPassword: this.resetPasswordForm.value.newPassword,
        confirmPassword: this.resetPasswordForm.value.confirmNewPassword


      }
      this.user.resetpassword(reqData, this.token).subscribe((Response: any) => {
        console.log(Response)
        this.snackbar.open(' ResetPassword sucessfully', '', {
          duration:2000,
         }); 
      });
    }

    //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.resetPasswordForm.value))
  }

}