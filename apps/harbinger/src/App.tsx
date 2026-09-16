import { useEffect } from 'react'
import { Hero } from './components/Hero'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Harbinger — Under Construction'
  }, [])

  return (
    <div className="min-h-screen bg-brand-dark font-sans text-body">
      <main>
        <Hero />
      </main>
      <Footer />
    </div>
  )
}
