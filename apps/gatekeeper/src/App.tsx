import { useEffect } from 'react'
import { LoginCard } from './components/LoginCard'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Gatekeeper — Login Form Template'
  }, [])

  return (
    <div className="min-h-screen bg-bg-page font-sans">
      <LoginCard />
      <Footer />
    </div>
  )
}
