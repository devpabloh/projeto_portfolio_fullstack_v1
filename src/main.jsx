import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {SettingsProvider} from './contexts/SettingsContext.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SettingsProvider>
      <App />
    </SettingsProvider>
    
  </StrictMode>,
)
