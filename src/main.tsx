import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import AppPage from "./components/pages/AppPage";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppPage />
  </React.StrictMode>,
)
