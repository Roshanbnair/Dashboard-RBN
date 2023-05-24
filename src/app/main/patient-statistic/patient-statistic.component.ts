import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-patient-statistic',
  templateUrl: './patient-statistic.component.html',
  styleUrls: ['./patient-statistic.component.css']
})
export class PatientStatisticComponent {

  highcharts = Highcharts;
  chartOptions = {};
  constructor() {
    
    this.chartOptions = {
        chart: {
            style: {
              color:"white"
          },
            type: 'spline',
            backgroundColor: "#1f1e26",
        },
        legend: {
            itemStyle: {
                color:"white"
            }
        },
        title: {
            style: {
                color: "white",
                
        },
        text: 'Patient Statistics',
      },
      credits: {
        enabled: false
      },

        xAxis: {
            labels: {
                style: {
                    color:"white",
                }
        },
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        accessibility: {
            description: 'Months of the year'
        }
    },
        yAxis: {
            labels: {
                style: {
                    color:"white"
                }
        },
            title: {
                style: {
                color:"white"
            },
            text: 'Patients'
      },
    },
    tooltip: {
        crosshairs: true,
        shared: true
    },
    plotOptions: {style: {
        color:"white"
    },
        spline: {
            marker: {
                radius: 4,
                lineColor: 'white',
                lineWidth: 1
            }
        }
    },
        series: [{
            name: 'Recovered Patients',    
            marker: {
            symbol: 'circle',
        },
        data: [500, 230, 600, 360, 700, 750, 420, {
            y: 890,
            marker: {
                symbol: 'circle'
            },
            accessibility: {
                description: 'Sunny symbol, this is the warmest point in the chart.'
            }
        }, 600, 300, 420, 220]

    }, {
        name: 'New Patients',
        marker: {
            symbol: 'circle'
        },
            data: [{
                style: {
                    color:"white"
                },
            y: 900,
            marker: {
                symbol: 'url(https://www.highcharts.com/samples/graphics/snow.png)'
            },
            accessibility: {
                description: 'Snowy symbol, this is the coldest point in the chart.'
            }
        }, 250, 380, 200, 300, 200, 520, 380, 770, 260, 520, 300]
    }]

    }
    //   EXPORTING
      HC_exporting(Highcharts);
  }
}