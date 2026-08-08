import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { PracticeAreas } from './components/PracticeAreas'
import { Legacy } from './components/Legacy'
import { Attorneys } from './components/Attorneys'
import { Testimonials } from './components/Testimonials'
import { Cta } from './components/Cta'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Verdict — Law Firm Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main>
        <Hero />
        <PracticeAreas />
        <Legacy />
        <Attorneys />
        <Testimonials />
        <Cta />
      </main>
      <Footer />
    </div>
  )
}
