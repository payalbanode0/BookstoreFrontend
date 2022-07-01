import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookserviceService } from 'src/app/services/bookservice/bookservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  BookingForm!: FormGroup;
  submitted = false;
  booksArray: any;
  token: any;
  Book: any;
  bookQuantity:any;
  fullName:any;
  MobileNumber:any;
  typeId:any;

  AddressList:any;
  AddressId:any;
  showAddress = true;
  showButton = true;
  showCart = true;
  showContinueButton = false;
  showOrdersummery = false;
  constructor(private bookService: BookserviceService,private formBuilder: FormBuilder,private router: Router) { 
    this.fullName= localStorage.getItem("fullName");
    this.MobileNumber= localStorage.getItem("MobileNumber");
  }

  ngOnInit(): void {
    
    this.getCartbook();

  }
  getCartbook() {
    this.bookService.Getcart().subscribe((response: any) => {
      console.log(response);
      this.booksArray = response.response;
      console.log(this.booksArray);

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

    })
  }

 

}
