import { useEffect } from 'react'
import { Threshold } from './components/Threshold'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Threshold — Login Form Template'
  }, [])

  return (
    <div className="min-h-screen font-sans">
      <Threshold />
      <Footer />
    </div>
  )
}
