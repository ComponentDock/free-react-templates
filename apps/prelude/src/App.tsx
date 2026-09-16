import { useEffect } from 'react'
import { SplitHero } from './components/SplitHero'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Prelude — Coming Soon Template'
  }, [])

  return (
    <div className="min-h-screen bg-[#1a1a2e] font-sans">
      <main>
        <SplitHero />
      </main>
      <Footer />
    </div>
  )
}
