import React from 'react'
import InputPanel from './components/input-panel'
import OutputPanel from './components/output-panel'
import ControlPanel from './components/control-panel'
import './app.css'

class App extends React.Component {
    render() {
        return <div id="app">
            <div className="left">
                <InputPanel></InputPanel>
            </div>
            <div className="right">
                <div className="right-up">
                    <OutputPanel></OutputPanel>
                </div>
                <div className="right-down">
                    <ControlPanel></ControlPanel>
                </div>
            </div>
        </div>
    }
}

export default App
