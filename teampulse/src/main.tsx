import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CheckInProvider from './context/CheckInContext.tsx'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CheckInProvider>
      <App />
    </CheckInProvider>
  </StrictMode>,
)
