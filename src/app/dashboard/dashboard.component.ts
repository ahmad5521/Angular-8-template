import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import * as Chart from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import * as pluginAnnotation from 'chartjs-plugin-annotation';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  productCodes: any = [];
  oldProductCodes: any = [];
  selectProductCodes: any = [];
  items: MenuItem[];

  CustomerCategoryData: any;
  ProfileStatusData: any;
  CustomerOnboardingData: any;
  ServiceUsageData: any;
  optionsBars: any;
  optionsDougnuts: any;
  optionsServiceUsage: any;
  pluginDataLabels: any = [pluginDataLabels];
  pluginAnnotations: any = [pluginAnnotation];
  constructor() {
    this.CustomerCategoryData = {
      labels: ['Organization', 'Individual'],
      datasets: [
        {
          label: 'First Dataset',
          data: [75, 25],
          backgroundColor: [
            "#661E83",
            "#D3D3D3",
          ],
        }
      ]
    }
    this.ProfileStatusData = {
      labels: ['Complete', 'Incomplete'],
      datasets: [
        {
          label: 'First Dataset',
          data: [60, 40],
          backgroundColor: [
            "#951B81",
            "#D3D3D3",
          ],
        }
      ],

    }

    this.CustomerOnboardingData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'First Dataset',
          backgroundColor: ["#fff"],
          borderColor: ["#0B68B3"],
          data: [65, 59, 80, 81, 56, 55, 40],
          lineTension: 0,
          borderWidth: 5,
        }
      ]
    }
    this.ServiceUsageData = {
      labels: ['January', "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      datasets: [
        {
          label: 'First Dataset',
          data: [60, 40, 10, 70, 15, 40, 60, 30, 50, 30, 10, 20],
          backgroundColor: [
            "#D3D3D3",
            "#5DC4F2",
          ],
          borderWidth: 0,
        }
      ]
    }

    this.optionsBars = {
      scales: {
        xAxes: [{
          fontFamily: 'ElmRegular',
          gridLines: {
            color: "rgba(0, 0, 0, 0)",
          }
        }],
        yAxes: [{
          display: false,
          gridLines: {
            color: "rgba(0, 0, 0, 0)",
          }
          , ticks: {
            beginAtZero: true
          }
        }]
      },
      legend: {
        display: false,
      },
      annotation: {
        annotations: [{
          type: 'line',
          mode: 'horizontal',
          scaleID: 'y-axis-0',
          value: 60,
          borderColor: 'rgb(144, 144, 144)',
          borderWidth: 2,
          borderDash: [5, 5],
          label: {
            enabled: true,
            position: 'right',
            backgroundColor: 'transparent',
            fontColor: '#006AB3',
            fontFamily: 'ElmRegular',
            fontSize: 18,
            content: 60 + " Rate/Day",
            yAdjust: -15,
            xAdjust: -0,
          }
        }]
      },
      plugins: {
        datalabels: {
          display: false
        }
      }
    }
    this.optionsDougnuts = {
      cutoutPercentage: 75,
      legend: {
        display: false,
      },
      plugins: {
        datalabels: {
          color: '#661E83',

          font: {
            size: 18
          },
          formatter: function (value, context) {
            return value + "%\n" + context.chart.data.labels[context.dataIndex] + '\n';
            // eq. return ['line1', 'line2', value]
          }
        }
      },
    }

    this.optionsServiceUsage = {
      title: {
        display: true,
        text: 'Highest Month is ' + 'February',
        fontFamily: 'ElmRegular',
        fontSize: 18,
        position: 'bottom'
      },
      scales: {
        xAxes: [{
          display: false,
          gridLines: {
            color: "rgba(0, 0, 0, 0)",
          }
        }],
        yAxes: [{
          display: false,
          gridLines: {
            color: "rgba(0, 0, 0, 0)",
          }
          , ticks: {
            beginAtZero: true
          }
        }]
      },
      legend: {
        display: false,
      },
      plugins: {
        datalabels: {
          display: false,
        }
      }
    }
  }

  ngOnInit() {
    // Chart.plugins.unregister(pluginDataLabels);

    this.productCodes = [
      {
        productCode: "All",
      },
      {
        productReferenceNumber: "5010000001",
        productCode: "001",
        productNameAR: "3",
        productNameEN: "2",
        description: "sdsdfert"
      },
      {
        productReferenceNumber: "5010000001",
        productCode: "002",
        productNameAR: "3",
        productNameEN: "2",
        description: "sdsdfert"
      },
      {
        productReferenceNumber: "5010000001",
        productCode: "003",
        productNameAR: "3",
        productNameEN: "2",
        description: "sdsdfert"
      },
      {
        productReferenceNumber: "5010000001",
        productCode: "004",
        productNameAR: "3",
        productNameEN: "2",
        description: "sdsdfert"
      },
      {
        productReferenceNumber: "5010000001",
        productCode: "005",
        productNameAR: "3",
        productNameEN: "2",
        description: "sdsdfert"
      },
    ];

  }

}
