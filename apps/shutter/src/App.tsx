import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Stats } from './components/Stats'
import { Portfolio } from './components/Portfolio'
import { About } from './components/About'
import { Services } from './components/Services'
import { Results } from './components/Results'
import { Testimonials } from './components/Testimonials'
import { Faq } from './components/Faq'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { CookieConsent } from './components/CookieConsent'
import { BackToTop } from './components/BackToTop'

export function App() {
  useEffect(() => {
    document.title = 'Shutter — Photographer Portfolio Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 dark:bg-gray-950 dark:text-gray-100">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-accent-500 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Stats />
        <Portfolio />
        <About />
        <Services />
        <Results />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <CookieConsent />
      <BackToTop />
    </div>
  )
}
