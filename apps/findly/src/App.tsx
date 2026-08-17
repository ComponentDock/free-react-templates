import { useEffect } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { TopDestinations } from './components/TopDestinations'
import { Categories } from './components/Categories'
import { Listings } from './components/Listings'
import { CtaBand } from './components/CtaBand'
import { HowItWorks } from './components/HowItWorks'
import { Testimonials } from './components/Testimonials'
import { Footer } from './components/Footer'

/* Findly — single-page directory & listings landing: header → hero search
   → top destinations → interest categories → popular listings carousel →
   find-more CTA → how-it-works → testimonials → footer. */
export function App() {
  useEffect(() => {
    document.title = 'Findly — Directory & Listings Template'
  }, [])

  return (
    <div className="min-h-screen bg-paper font-sans text-navy">
      <Header />
      <main>
        <Hero />
        <TopDestinations />
        <Categories />
        <Listings />
        <CtaBand />
        <HowItWorks />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}
