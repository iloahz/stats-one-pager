import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Chart } from 'chart.js'

export default function Histogram() {
    
    const canvas = useRef()
    const chart = useRef()
    const data = useSelector((state) => state.input.data)

    useEffect(() => {
        if (chart.current == null) {
            const labels = [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
              ];
            const chartData = {
                labels: labels,
                datasets: [{
                    label: 'My First dataset',
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: data,
                }]
            };
            const config = {
                type: 'line',
                data: chartData,
                options: {
                    responsive: true
                }
            }
            chart.current = new Chart(
                canvas.current,
                config
            )
        } else {
            chart.current.data.labels.push('new')
            chart.current.data.datasets.forEach((dataset) => {
                dataset.data = data
            })
            chart.current.update()
        }
    })

    return (<>
        <canvas
            id="histogram"
            ref={canvas}
        ></canvas>
    </>)
}
