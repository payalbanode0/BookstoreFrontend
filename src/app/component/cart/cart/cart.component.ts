import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BookserviceService } from 'src/app/services/bookservice/bookservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
 
  submitted = false;
  booksArray: any;
  token: any;
  Book: any;
  bookQuantity:any;
  fullName:any;
  
 
  
  constructor(private bookService: BookserviceService,private formBuilder: FormBuilder,private router: Router,private snackbar:MatSnackBar) { 
    this.fullName= localStorage.getItem("fullName");
    
  }

  ngOnInit(): void {
    
    this.getCartbook();

  }
  getCartbook() {
    this.bookService.Getcart().subscribe((response: any) => {
      console.log(response);
      this.booksArray = response.response;
      console.log(this.booksArray);
      this.snackbar.open(' GetCart  sucessfully', '', {
        duration:2000,
       }); 

    });
  } 
  removeCart(cartId:any) {
    let data={
      CartId:cartId
    }
    console.log(cartId)
    this.bookService.removeCart(data).subscribe((response: any) => {
      this.getCartbook()
      console.log('Remove successfully', response);
      this.snackbar.open(' Remove Cart  sucessfully', '', {
        duration:2000,
       }); 

    })
  }

 

}
