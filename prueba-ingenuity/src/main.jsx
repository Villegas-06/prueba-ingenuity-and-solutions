import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './container/App'
import 'bootstrap/dist/css/bootstrap.css'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
