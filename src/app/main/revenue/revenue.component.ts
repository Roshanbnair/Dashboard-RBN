import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-revenue',
  templateUrl: './revenue.component.html',
  styleUrls: ['./revenue.component.css'],
})
export class RevenueComponent {
  highcharts = Highcharts;
  chartOptions = {};
  constructor() {
    this.chartOptions = {
      chart: {
        type: 'area',
                    backgroundColor: "#1f1e26",

      },
        legend: {
            itemStyle: {
                color:"white"
            }
        },
    title: {
        text: '<h1>Revenue</h1>',
      align: 'center',
        style: {
                color: "white",      
        },
    },

      yAxis: {
      labels: {
                style: {
                    color:"white",
                }
        },
        title: {
            useHTML: true,
        text: 'Money',
            style: {
                color: "white",
                
        },
        }
    },
    tooltip: {
        shared: true,
        headerFormat: '<span style="font-size:12px"><b>{point.key}</b></span><br>'
      },
          xAxis: {
            labels: {
              style: {
                color: "white",
               
              }
}
        },
    plotOptions: {
      series: {
          
                style: {
                    color:"white",
                },
            pointStart: 2015
        },
      area: {
          labels: {
                style: {
                    color:"white",
                }
        },
            stacking: 'normal',
            lineColor: '#666666',
            lineWidth: 1,
            marker: {
                lineWidth: 1,
                lineColor: '#666666'
            }
        }
    },
      series: [{
      labels: {
                style: {
                    color:"white",
                }
        },
        name: 'Income',
      data: [420, 550, 850, 550, 190, 310, 510, 620, 600]
    }, {
        name: 'Expense',
        data: [170, 200, 630, 520, 730, 420, 450, 570, 400]
    }]

    };
  }
}
