import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BookserviceService } from 'src/app/services/bookservice/bookservice.service';

@Component({
  selector: 'app-quickview',
  templateUrl: './quickview.component.html',
  styleUrls: ['./quickview.component.scss']
})
export class QuickviewComponent implements OnInit {
  feedbackArray: any
  feedback: any
  BookId: any;
  bookArray: any;
  comment: any;
  rating: any;
  orderQuantity = 1;
  show=false;
  bookmodel:any

  constructor(private bookService: BookserviceService, private router: Router,private snackbar:MatSnackBar) { }

  ngOnInit(): void {
    this.BookId = localStorage.getItem("bookId");
    console.log(this.BookId);
    this.getAllBook();

  }
  getAllBook() {
    this.bookService.getbook().subscribe((response: any) => {
      response.response.forEach((element: any) => {
        if (element.bookId == this.BookId) {
          this.bookArray = element;
          this.getFeedback();
          console.log(this.bookArray);
          
        }
      });
    })
  }
  addFeedback() {
    let data = {
      rating: this.rating,
      comment: this.comment,
      bookId: this.BookId
    }
    console.log("reqdata")
    this.bookService.addfeedback(data).subscribe((response: any) => {
      console.log("User Feedback", response);
      this.getFeedback();
      this.snackbar.open(' Add Feedback  sucessfully', '', {
        duration:2000,
       }); 

    }, error => { console.log(error) })
  }
  getFeedback() {
    let data = {
      bookId: this.BookId
    }
    console.log(data)
    this.bookService.getfeedback(data).subscribe((response: any) => {
      console.log('User Feedback', response);
      this.feedbackArray = response.response;
      console.log(this.feedbackArray);
      console.log(data)
      this.snackbar.open(' GetFeedback  sucessfully', '', {
        duration:2000,
       }); 

      
    });
  }
  value=1;
  handleMinus() {
    this.value--;  
  }
  handlePlus() {
    this.value++;    
  }

  hideAndShow() {
    console.log("calling hide");
    this.show= !this.show;

  }
  AddToBag() {
    let reqdata = { bookId: this.BookId, booksQty: this.value}
    this.bookService.addtobag(reqdata).subscribe(
      (response: any) => {
       
        console.log(response);


      }
    )
  }



}
