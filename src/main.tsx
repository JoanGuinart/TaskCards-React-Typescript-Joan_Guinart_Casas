import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App'
import './index.css'
import 'bootswatch/dist/yeti/bootstrap.min.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App title='React & Typescript' />
  </React.StrictMode>,
)
