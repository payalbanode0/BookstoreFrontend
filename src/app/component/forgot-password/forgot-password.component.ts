import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserserviceService } from 'src/app/services/userService/userservice.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  forgotForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private user: UserserviceService) { }

  ngOnInit(): void {
    this.forgotForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],

    });
  }
  OnSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.forgotForm.valid) {
      let reqData = {
        email: this.forgotForm.value.email,

      }
      this.user.forgotpassword(reqData).subscribe((response: any) => {
        console.log(response);
      })
      //  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
    }
  }
}
