// Chart Options
const options = {
    chart: {
        height: 450, 
        width: '100%', 
        type: 'bar', 
        background: '#f4f4f4', 
        foreColor: '#333'
    }, 
    series: [{
        name: 'Population', 
        data: [
            8550405, 
            3971883, 
            2720546, 
            2296224, 
            1567442,
            1563025, 
            1469845, 
            1394928, 
            1300092, 
            1026908
        ]
    }], 
    xaxis: {
        categories: [
            'New York', 
            'Los Angeles', 
            'Chicago', 
            'Houston', 
            'Philadelphia', 
            'Pheonix', 
            'San Antonio', 
            'San Diego', 
            'Dallas', 
            'San Jose'
        ],
    }, 
    fill: {
        colors: ['#f44336']
    }, 
    dataLabels: {
        enabled: false
    },
    title: {
        text: 'Largest US Cities By Population', 
        align: 'center', 
        margin: 20, 
        offsetY: 20, 
        style: {
            fontSize: '25px'
        }
    }
};

// Init Chart
const chart = new ApexCharts(document.querySelector('#chart'), options);

// Render Chart
chart.render(); 

// Event Method Example
document.querySelector('button').addEventListener('click', () => 
    chart.updateOptions({
        plotOptions: {
            bar: {
                horizontal: true
            }
        }
    })
);



