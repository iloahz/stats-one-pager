import React from 'react'
import Histogram from './output/histogram'
import Line from './output/line'
import './output/chart-register'
import './output-panel.css'

class OutputPanel extends React.Component {
    render() {
        return <>
            <div className="chart-lane">
                <div className="chart-lane-histogram">
                    <Histogram></Histogram>
                </div>
                <div className="chart-lane-line">
                    <Line></Line>
                </div>
            </div>
            <div className="numbers-lane">

            </div>
        </>
    }
}

export default OutputPanel
