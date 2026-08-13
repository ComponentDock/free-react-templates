import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { About } from './components/About'
import { PracticeAreas } from './components/PracticeAreas'
import { Attorneys } from './components/Attorneys'
import { Consultation } from './components/Consultation'
import { CaseStudies } from './components/CaseStudies'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { Gallery } from './components/Gallery'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Gavel — Law Firm Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <About />
        <PracticeAreas />
        <Attorneys />
        <Consultation />
        <CaseStudies />
        <Testimonials />
        <Blog />
        <Gallery />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
