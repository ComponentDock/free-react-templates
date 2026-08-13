import { useEffect } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Justice } from './components/Justice'
import { CaseStudies } from './components/CaseStudies'
import { Attorneys } from './components/Attorneys'
import { Consultation } from './components/Consultation'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Counsely — Law Firm Agency'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <Justice />
        <CaseStudies />
        <Attorneys />
        <Consultation />
        <Testimonials />
        <Blog />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
