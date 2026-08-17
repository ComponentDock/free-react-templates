import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Categories } from './components/Categories'
import { About } from './components/About'
import { Services } from './components/Services'
import { Projects } from './components/Projects'
import { Commitment } from './components/Commitment'
import { QuoteForm } from './components/QuoteForm'
import { Footer } from './components/Footer'

/* Gardenly — single-page gardening service landing: navbar → hero slider →
   categories → about → services → feature projects → commitment/quote band
   → footer. */
export function App() {
  useEffect(() => {
    document.title = 'Gardenly — Gardening Service Template'
  }, [])

  return (
    <div className="min-h-screen bg-paper font-sans text-forest">
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <About />
        <Services />
        <Projects />
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/3">
            <img
              src="https://picsum.photos/seed/gardenly-11/640/600"
              alt="Gardeners at work"
              className="h-[600px] w-full object-cover"
            />
          </div>
          <div className="lg:w-1/3">
            <Commitment />
          </div>
          <div className="lg:w-1/3">
            <QuoteForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
