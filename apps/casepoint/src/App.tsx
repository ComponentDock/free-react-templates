import { useEffect } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { PracticeAreas } from './components/PracticeAreas'
import { About } from './components/About'
import { ContactForm } from './components/ContactForm'
import { CaseStudies } from './components/CaseStudies'
import { CtaBanner } from './components/CtaBanner'
import { Team } from './components/Team'
import { Testimonial } from './components/Testimonial'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Casepoint — Law Firm'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Header />
      <main>
        <Hero />
        <PracticeAreas />
        <About />
        <ContactForm />
        <CaseStudies />
        <CtaBanner />
        <Team />
        <Testimonial />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
