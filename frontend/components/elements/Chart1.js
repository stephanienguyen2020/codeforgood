'use client'
import Highcharts from "highcharts/highstock"
import PieChart from "highcharts-react-official"

const options = {
    chart: {
        type: 'pie',
        plotBackgroundColor: null,
        backgroundColor: null,
        width: 490,
        height: 490,
    },
    title: {
        text: '',
    },
    tooltip: {
        pointFormat: '<b>{point.percentage:.1f}%</b>'
    },
    credits: {
        enabled: false
    },
    accessibility: {
      point: {
        valueSuffix: '%'
      }
    },
    plotOptions: {
        pie: {
            states: {
                inactive: {
                    opacity: 0.4
                }
            },
            borderWidth: 0,
            allowPointSelect: true,
            cursor: 'pointer', 
            dataLabels: {
                enabled: true,
                distance: -25,
                format: '',
                style: {
                    fontSize: '12px',
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    fontWeight: 'bold',
                    color: '#fff',
                    textOutline: 'none'
                },
                background: {
                    enabled: false,

                },
                dropShadow: {
                    enabled: false,
                }
            }, 
            showInLegend: false,
        },
    }, 
    series: [{
        type: 'pie',
        innerSize: '60%',
        data: [{
            name: 'Blog',
            y: 25,
            color: '#AFC5FF',
          }, {
            name: 'Donate',
            color: '#FDEBB3',
            y: 15.3
          },  {
            name: 'Contact',
            color: '#ACF2C4',
            y: 12.7
          }, {
            name: 'Sign In',
            color: '#CDBDF3',
            y: 14.5
          }, {
            name: 'Landing Page',
            color: '#E89F8E',
            y: 30
          },  {
            name: 'Survey',
            y: 2.5,
            color: '#6574EB',
          }]
    }]
}

export default function Chart1() {
    return (
        <>
            <PieChart highcharts={Highcharts} options={options} id="container" />
        </>
    )
}
