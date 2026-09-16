import { useEffect } from 'react'
import { Hero } from './components/Hero'
import { Footer } from './components/Footer'

const DEFAULT_TARGET = new Date('2030-01-01T00:00:00')

export function App() {
  useEffect(() => {
    document.title = 'Novus — Coming Soon'
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-dark-start via-brand-dark-mid to-brand-dark-end font-sans text-body">
      <main>
        <Hero targetDate={DEFAULT_TARGET} />
      </main>
      <Footer />
    </div>
  )
}
