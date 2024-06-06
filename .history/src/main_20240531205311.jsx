import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AppSaludo from './AppSaludo.jsx'

const root = ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppSaludo />
  </React.StrictMode>,
)
