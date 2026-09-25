import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Clients } from './components/Clients'
import { Portfolio } from './components/Portfolio'
import { CaseStudies } from './components/CaseStudies'
import { Resume } from './components/Resume'
import { Certifications } from './components/Certifications'
import { About } from './components/About'
import { Testimonials } from './components/Testimonials'
import { Services } from './components/Services'
import { Blog } from './components/Blog'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Curriculo — Resume & Portfolio Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Clients />
        <Portfolio />
        <CaseStudies />
        <Resume />
        <Certifications />
        <About />
        <Testimonials />
        <Services />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
