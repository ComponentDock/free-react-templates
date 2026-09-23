import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { PracticeAreas } from './components/PracticeAreas'
import { Stats } from './components/Stats'
import { Testimonials } from './components/Testimonials'
import { Expertise } from './components/Expertise'
import { CTA } from './components/CTA'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Litigator — Law Firm Landing Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-surface text-ink transition-colors dark:bg-gray-950 dark:text-gray-100">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <PracticeAreas />
        <Stats />
        <Testimonials />
        <Expertise />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
