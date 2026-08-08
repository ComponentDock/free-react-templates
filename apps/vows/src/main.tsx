import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App'

// Light theme is the DEFAULT (matches the original Forever Always design);
// honor a previously persisted "dark" choice from the theme toggle.
const savedTheme = window.localStorage.getItem('vows-theme')
if (savedTheme === 'dark') {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
