import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { SatisfactionBand } from './components/SatisfactionBand'
import { Categories } from './components/Categories'
import { About } from './components/About'
import { Services } from './components/Services'
import { Insights } from './components/Insights'
import { Brands } from './components/Brands'
import { CaseStudy } from './components/CaseStudy'
import { Testimonials } from './components/Testimonials'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Netora — IT Solutions Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-body">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <SatisfactionBand />
        <Categories />
        <About />
        <Services />
        <Insights />
        <Brands />
        <CaseStudy />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}
