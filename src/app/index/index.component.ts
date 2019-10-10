import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  isloading = false;
  products: any[] = [];
  productCodsArr: string[];
  display: boolean = false;


  ngOnInit() {
    let self = this;

    self.productCodsArr = [];
    self.isloading = true;

    self.products =  [
      {
          "productReferenceNumber": 605677963266322432,
          "productCode": "003",
          "productNameAR": "عربي",
          "productNameEN": "English",
          "description": "sdfsdfsdfdfdsfdsf",
          "status": true
      },
      {
          "productReferenceNumber": 5010000002,
          "productCode": "002",
          "productNameAR": "ابشر",
          "productNameEN": "absher",
          "description": "description",
          "status": false
      }
  ];


console.log(self.products);

  }

}
