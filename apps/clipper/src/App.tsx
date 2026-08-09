import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { QuickInfo } from './components/QuickInfo'
import { Services } from './components/Services'
import { Features } from './components/Features'
import { Cta } from './components/Cta'
import { StyleSection } from './components/StyleSection'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Clipper — Barber Shop Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <QuickInfo />
        <Services />
        <Features />
        <Cta />
        <StyleSection />
      </main>
      <Footer />
    </div>
  )
}
