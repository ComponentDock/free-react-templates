import { useEffect } from 'react'
import { ContactBar } from './components/ContactBar'
import { Hero } from './components/Hero'
import { Portfolio } from './components/Portfolio'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Credence — CV/Portfolio Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <main className="flex-1">
        <ContactBar />
        <Hero />
        <Portfolio />
      </main>
      <Footer />
    </div>
  )
}
