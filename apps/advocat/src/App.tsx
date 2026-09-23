import { useEffect } from 'react'
import { TopBar } from './components/TopBar'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Counter } from './components/Counter'
import { About } from './components/About'
import { PracticeAreas } from './components/PracticeAreas'
import { Appointment } from './components/Appointment'
import { CaseStudies } from './components/CaseStudies'
import { CtaBanner } from './components/CtaBanner'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { NewsletterCta } from './components/NewsletterCta'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Advocat — Law Firm Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900">
      <TopBar />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Counter />
        <About />
        <PracticeAreas />
        <Appointment />
        <CaseStudies />
        <CtaBanner />
        <Testimonials />
        <Blog />
        <NewsletterCta />
      </main>
      <Footer />
    </div>
  )
}
