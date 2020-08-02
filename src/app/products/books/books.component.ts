import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styles: [],
})
export class BooksComponent implements OnInit {
  bookProductList = [
    {
      id: 1,
      name: 'Book Prod 1',
      price: 40000.501,
      color: 'red',
      inStock: 50,
      country: 'india',
    },
    {
      id: 2,
      name: 'Book Prod 2',
      price: 45000.501,
      color: 'green',
      country: 'us',
      inStock: 60,
    },
    {
      id: 3,
      name: 'Book Prod 3',
      price: 5000.401,
      color: 'blue',
      country: 'japan',
      inStock: 0,
    },
  ];

  getTotalInStockProductCount() {
    let total = 0;
    for (let item of this.bookProductList) {
      total += item.inStock;
    }
    return total;
  }

  constructor() {}

  ngOnInit(): void {}
}
