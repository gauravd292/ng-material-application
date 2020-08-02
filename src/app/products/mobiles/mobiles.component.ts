import { Component, OnInit } from '@angular/core';
import { Mobile } from './mobile.model';
import { MOBILE_LIST } from './mock';
import { MobileDataService } from './../../services/mobile-data.service';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styles: [],
})
export class MobilesComponent implements OnInit {
  mobileProductList;

  getTotalInStockProductCount() {
    let total = 0;
    for (let item of this.mobileProductList) {
      total += item.inStock;
    }
    return total;
  }

  removeQty(product) {
    if (product.qty - 1 >= 0) {
      product.qty--;
    }
  }

  addQty(product) {
    if (product.inStock > product.qty + 1) {
      product.qty++;
    }
  }

  constructor(private mobileDataService: MobileDataService) {}

  ngOnInit(): void {
    this.mobileProductList = this.mobileDataService.getAllData();
  }
}
