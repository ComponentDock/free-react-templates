import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { MostVisitedPlaces } from './components/MostVisitedPlaces'
import { PopularCategories } from './components/PopularCategories'
import { WhyUs } from './components/WhyUs'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { FAQ } from './components/FAQ'
import { CTA } from './components/CTA'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Spotlight — Business Directory Template'
  }, [])

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <MostVisitedPlaces />
      <PopularCategories />
      <WhyUs />
      <Testimonials />
      <Blog />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  )
}
