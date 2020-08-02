import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-laptops',
  templateUrl: './laptops.component.html',
  styles: [],
})
export class LaptopsComponent implements OnInit {
  laptopProductList = [
    {
      id: 1,
      name: 'Laptop Prod 1',
      price: 40000.501,
      color: 'red',
      inStock: 50,
      country: 'india',
    },
    {
      id: 2,
      name: 'Laptop Prod 2',
      price: 45000.501,
      color: 'green',
      country: 'us',
      inStock: 60,
    },
    {
      id: 3,
      name: 'Laptop Prod 3',
      price: 5000.401,
      color: 'blue',
      country: 'japan',
      inStock: 0,
    },
  ];

  id;

  getTotalInStockProductCount() {
    let total = 0;
    for (let item of this.laptopProductList) {
      total += item.inStock;
    }
    return total;
  }

  constructor(private activatedRoute: ActivatedRoute) {
    activatedRoute.paramMap.subscribe((res) => {
      this.id = console.log(res.get('id'));
    });
    console.log(this.id);
  }

  ngOnInit(): void {}
}
