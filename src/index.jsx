import React from 'react'
import ReactDOM from 'react-dom'
import App from './app/app'
import { store } from './app/store/store'
import { Provider } from 'react-redux'
import './index.css'

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("main")
)
