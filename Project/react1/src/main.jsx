import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Component1 from './componets/componentone.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Component1/>
  </StrictMode>
)
