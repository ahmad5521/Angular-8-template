import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customerProfile',
  templateUrl: './customerProfile.component.html',
  styleUrls: ['./customerProfile.component.css']
})
export class CustomerProfileComponent implements OnInit {

  data: any;
  options: any;
  constructor() {

    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          labels: {
            title: 'null'
          },
          data: [65, 35],
          backgroundColor:[
            '#F6C49C',
            '#F5F6F9'
          ]
        }
      ]
    };

    this.options = {
      cutoutPercentage: 85,
      legend:{
        display:false,
      },
      plugins: {
        datalabels: {
          render: 'percentage',
          color: '#F57B18',
          anchor:'start',
            align: 'start',
            font:{
              family: 'ElmBold',
              size: 16
            }
        }
      }
    }
  }

  ngOnInit() {
  }

}
