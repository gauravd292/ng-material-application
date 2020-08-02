import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css'],
})
export class ProductViewComponent implements OnInit {
  details: any;

  constructor(private activatedRoute: ActivatedRoute) {
    activatedRoute.paramMap.subscribe((res) => {
      this.details = res.get('obj');
    });

    console.log(this.details);
  }

  ngOnInit(): void {}
}
