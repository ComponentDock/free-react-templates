import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { QuotationForm } from './components/QuotationForm'
import { Services } from './components/Services'
import { AboutTabs } from './components/AboutTabs'
import { Testimonials } from './components/Testimonials'
import { Projects } from './components/Projects'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Fixero — Handyman & Construction Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-gray-100">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <QuotationForm />
        <Services />
        <AboutTabs />
        <Testimonials />
        <Projects />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
