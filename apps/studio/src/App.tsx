import { useEffect } from 'react'
import { Hero } from './components/Hero'

export function App() {
  useEffect(() => {
    document.title = 'Studio — Creative Studio Landing'
  }, [])

  return (
    <div className="min-h-screen bg-brand font-sans text-body transition-colors">
      <main>
        <Hero />
      </main>
    </div>
  )
}
