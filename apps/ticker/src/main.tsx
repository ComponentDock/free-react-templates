import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App'

// Dark mode is the DEFAULT (matches the original Financeflow design); honor a
// previously persisted "light" choice from the theme toggle.
const savedTheme = window.localStorage.getItem('ticker-theme')
if (savedTheme === 'light') {
  document.documentElement.classList.remove('dark')
} else {
  document.documentElement.classList.add('dark')
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
