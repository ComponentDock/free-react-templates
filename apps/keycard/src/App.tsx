import { useEffect } from 'react'
import { LoginPage } from './components/LoginPage'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Keycard — Login Form Template'
  }, [])

  return (
    <div className="min-h-screen font-sans">
      <LoginPage />
      <Footer />
    </div>
  )
}
