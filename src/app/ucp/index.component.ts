import { Component, OnInit} from '@angular/core'
import { ConfirmationService } from 'primeng/api';
@Component({
  templateUrl: './index.component.html'
})

export class UCPComponent implements OnInit {

    data: any = [];
    rates : any = [];
    productCodes : any = [];
    rate : number = 30;
    options: any;
    optionsDougnuts : any;
    optionsServiceUsage: any;
    CustomerCategoryData: any;
    ProfileStatusData: any;
    CustomerOnboardingData: any;
    ServiceUsageData: any;

  constructor(private confirmationService: ConfirmationService) {

  }

  ngOnInit() {

    this.optionsDougnuts = {
        animation : {
            
            duration:2000
        }, 
        cutoutPercentage: 70,
        legend: {
          display: false,
        },
        layout: {
          padding: {
              left: 50,
              right: 50,
              top: 50,
              bottom: 50
          }
      },
        plugins: {
          datalabels: {
            color: '#1A1A1A',
            anchor:'end',
            align: 'end',
            font:{
              family: 'ElmBold',
              size: 16
            },
            formatter: function(value,context) {
              return  value + "%\n" + context.chart.data.labels[context.dataIndex] +'\n' ;
              // eq. return ['line1', 'line2', value]
          }
          }
        },
      }

      this.optionsServiceUsage = {
        title: {
          display: true,
          text: 'Highest Month is ' +'February',
          fontFamily: 'ElmBold',
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
      }


    this.options = {legend: {position: 'bottom'}};
    this.rates.push({"name":"DAY"},
                    {"name":"WEEK"},
                    {"name":"MONTH"},
                    {"name":"YEAR"});

    this.productCodes.push(
        { "productNameEN": "All","productCode" : -1 },
        { "productNameEN": "p2","productCode" : 158 },
        { "productNameEN": "p3","productCode" : 128 },
        { "productNameEN": "p4","productCode" : 785 },
        );

    // this.data = {
    //     labels: ['January'+10+'%', 'February'+60+'%', 'March'+20+'%', 'April'+10+'%'],
    //     datasets: [
    //         {
    //             label: 'First Dataset',
    //             data: [10, 60, 20, 10],
    //             backgroundColor: ['#ff6384','#36a2eb','#cc65fe','#ffce56'],
  
    //         },
    //     ]
    //   };

    this.CustomerCategoryData = {
        labels: ['Organization ', 'Individual'],
        datasets: [
          {
            label: 'First Dataset',
            data: [75 , 25],
            backgroundColor: ["#661E83","#D3D3D3"]
          }
        ]
      }
      this.ProfileStatusData = {
        labels: ['Complete', 'Incomplete'],
        datasets: [
          {
            label: 'First Dataset',
            data: [60, 40 ],
            backgroundColor: ["#951B81", "#D3D3D3"]
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
      
  }

}
