import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookserviceService } from 'src/app/services/bookservice/bookservice.service';

@Component({
  selector: 'app-quickview',
  templateUrl: './quickview.component.html',
  styleUrls: ['./quickview.component.scss']
})
export class QuickviewComponent implements OnInit {

  feedback: any
  BookId: any;
  bookArray: any;
  comment: any;
  rating: any;
  orderQuantity = 1;

  constructor(private bookService: BookserviceService, private router: Router) { }

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

    }, error => { console.log(error) })
  }
  getFeedback() {
    console.log(this.bookArray)
    this.bookService.getfeedback(this.bookArray.bookId).subscribe((response: any) => {
      console.log('User Feedback', response);
      this.bookArray = response.response;
      console.log(this.bookArray);
    });
  }

}
