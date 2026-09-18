import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Counter } from './components/Counter'
import { About } from './components/About'
import { Testimonials } from './components/Testimonials'
import { PracticeAreas } from './components/PracticeAreas'
import { Attorneys } from './components/Attorneys'
import { Blog } from './components/Blog'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

/* Maxim — single-page law firm landing: navbar → hero → counter stats →
   about → testimonials → practice areas → attorneys → blog → contact → footer. */
export function App() {
  useEffect(() => {
    document.title = 'Maxim — Law Firm Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-ink">
      <Navbar />
      <main>
        <Hero />
        <Counter />
        <About />
        <Testimonials />
        <PracticeAreas />
        <Attorneys />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
