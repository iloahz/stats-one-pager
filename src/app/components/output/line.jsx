import React from 'react'
import { Chart, LineController, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js'

Chart.register(LineController, CategoryScale, LinearScale, PointElement, LineElement)

class Line extends React.Component {

    constructor(props) {
        super(props)
        this.canvas = React.createRef()
    }

    componentDidMount() {
        const labels = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
          ];
          const data = {
            labels: labels,
            datasets: [{
              label: 'My First dataset',
              backgroundColor: 'rgb(255, 99, 132)',
              borderColor: 'rgb(255, 99, 132)',
              data: [1, 2, 3, 4, 5, 6, 7],
            }]
          };
        const config = {
            type: 'line',
            data,
            options: {
                responsive: true
            }
        }
        const hist = new Chart(
            this.canvas.current,
            config
        )
    }

    render() {
        return <>
            <canvas
                id="line"
                ref={this.canvas}
            ></canvas>
        </>
    }
}

export default Line
