import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { EducationCta } from './components/EducationCta'
import { About } from './components/About'
import { News } from './components/News'
import { EnrollCta } from './components/EnrollCta'
import { Pricing } from './components/Pricing'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Nurture — Kids Learning Center'
  }, [])

  return (
    <div className="min-h-screen bg-paper font-sans text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <EducationCta />
        <About />
        <News />
        <EnrollCta />
        <Pricing />
      </main>
      <Footer />
    </div>
  )
}
