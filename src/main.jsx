import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <div className="bg-cover bg-no-repeat"style={{ backgroundImage: "url('logo.avif')", backgroundSize: 'cover', minHeight: '100vh' }}> */}
    <App />
    {/* </div> */}
  </React.StrictMode>,
)
