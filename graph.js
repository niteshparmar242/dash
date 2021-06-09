
var ctx = document.getElementById('myChart1').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['', '', '', '', '', ''],
        datasets: [{
            label: '',
            data: [12, 19, 15, 14, 8, 5],
            backgroundColor: [
                'green',
                '#FF4861',
                '#FF4861',
                '#FF4861',
                '#FF4861',
                '#FF4861',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: false,
        legend:{
            display:false
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    display:false
                }
            }]
        }
    }
});


var ctx = document.getElementById('myChart2').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['', '', '', '', '', ''],
        datasets: [{
            label: '',
            data: [12, 15, 16, 15, 16, 15],
            backgroundColor: [
                'green',
                '#70BBFD',
                '#70BBFD',
                '#70BBFD',
                '#70BBFD',
                '#70BBFD',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: false,
        legend:{
            display:false
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    display:false
                }
            }]
        }
    }
});


var ctx = document.getElementById('myChart3').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['', '', '', '', '', ''],
        datasets: [{
            label: '',
            data: [12, 19, 13, 15, 12, 13],
            backgroundColor: [
                'green',
                '#C88FFA',
                '#C88FFA',
                '#C88FFA',
                '#C88FFA',
                '#C88FFA',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: false,
        legend:{
            display:false
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    display:false
                }
            }]
        }
    }
});


var ctx = document.getElementById('myChart4').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['', '', '', '', '', ''],
        datasets: [{
            label: '',
            data: [12, 16, 13, 15, 12, 3],
            backgroundColor: [
                'green',
                'blue',
                'blue',
                'blue',
                'blue',
                'blue',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: false,
        legend:{
            display:false
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    display:false
                }
            }]
        }
    }
});

var ctx = document.getElementById('myChart5').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        datasets: [{
            label: '',
            data: [3, 4, 5, 5, 6, 7],
            
            backgroundColor: [
                '#C6EDF3'
                
            ],
            borderColor: [
                '#4DACFF'
                
            ],
            borderWidth: 1
        }]
        
    },
    options: {
        
        legend:{
            display:false
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    
                }
            }]
        }
    }
});

