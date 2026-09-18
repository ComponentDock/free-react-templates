import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Gallery } from './components/Gallery'
import { CTA } from './components/CTA'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Exposely — Photography Portfolio Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-['Roboto',sans-serif]">
      <Navbar />
      <main>
        <Hero />
        <Gallery />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
