import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { StatsBar } from './components/StatsBar'
import { Services } from './components/Services'
import { Products } from './components/Products'
import { Impact } from './components/Impact'
import { Financing } from './components/Financing'
import { Process } from './components/Process'
import { Testimonials } from './components/Testimonials'
import { CtaBanner } from './components/CtaBanner'
import { Faq } from './components/Faq'
import { QuoteForm } from './components/QuoteForm'
import { Footer } from './components/Footer'
import { BackToTop } from './components/BackToTop'

export function App() {
  useEffect(() => {
    document.title = 'Helios — Solar Energy Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 antialiased dark:bg-gray-950 dark:text-gray-100">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-primary-600 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <StatsBar />
        <Services />
        <Products />
        <Impact />
        <Financing />
        <Process />
        <Testimonials />
        <CtaBanner />
        <Faq />
        <QuoteForm />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
