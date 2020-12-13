import Chart from 'chart.js';
import colorGenerator from './colorGenerator';

const chartGenerator = (data, chartName, chartType) => {
  if (data !== []){
    let oldCanvas = document.getElementById("chart")
    oldCanvas && oldCanvas.remove()
    let newCanvas = document.createElement('CANVAS')
    let labels = data.map(item => item.label);
    let values = data.map(item => item.value);
    new Chart(newCanvas.getContext('2d'), {
      type: chartType,
      data: {
        labels: labels,
        datasets: [{
          label: chartName,
          data: values,
          backgroundColor: (chartType === 'pie' || chartType === 'doughnut'|| chartType === 'polarArea') ?
            colorGenerator(data.length) : 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: (chartType === 'pie' || chartType === 'doughnut'|| chartType === 'polarArea') ? 0 : 1
        }]
      },
      options: {
        title: {
            display: true,
            text: chartName.length ? chartName : 'New Chart',
        },
        responsive: true,
        legend: {display:false},
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }},
      events: ['mousemove', 'touchmove']
    })
    newCanvas.setAttribute("id", "chart")
    document.getElementById('chart-area').appendChild(newCanvas)
    }
}

export default chartGenerator;