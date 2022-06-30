import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookserviceService } from 'src/app/services/bookservice/bookservice.service';

@Component({
  selector: 'app-getallbook',
  templateUrl: './getallbook.component.html',
  styleUrls: ['./getallbook.component.scss']
})
export class GetallbookComponent implements OnInit {

  booklist: any;
  booksCount: any;
  sortBy:any="Sort by relevence";


  constructor(private book: BookserviceService, private router: Router) { }

  ngOnInit(): void {
    this.getallbooks()
  }

  getallbooks() {
    this.book.getbook().subscribe((res: any) => {
      console.log(res);
      this.booklist = res.response;
      console.log("BookData", this.booklist);
    }),
      (error: any) => {
        console.log(error);

      }
  }


  relevence(){  
  }

  lowtohigh(){
    this.booklist= this.booklist.sort((low:any,high:any)=> low.discountPrice-high.discountPrice);
    }

  hightolow(){
    this.booklist= this.booklist.sort((low:any,high:any)=> high.discountPrice-low.discountPrice);
  }

  newestarrivals(){
    this.booklist.reverse();
  }
  quickview(Book:any){  
    localStorage.setItem('bookId', Book.bookId); 
    this.router.navigateByUrl('dashboard/quickview')
  }
}
