import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Services } from './components/Services'
import { CaseStudies } from './components/CaseStudies'
import { Team } from './components/Team'
import { ConsultationCta } from './components/ConsultationCta'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Counsel — Law Firm Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <CaseStudies />
        <Team />
        <ConsultationCta />
        <Testimonials />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
