import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { Testimonials } from './components/Testimonials'
import { Contact } from './components/Contact'
import { Faq } from './components/Faq'
import { CtaBanner } from './components/CtaBanner'
import { Footer } from './components/Footer'
import { CookieBanner } from './components/CookieBanner'
import { BackToTop } from './components/BackToTop'

export function App() {
  useEffect(() => {
    document.title = 'Dealflow — CRM Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 dark:bg-gray-950 dark:text-gray-100">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-primary-600 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Features />
        <Testimonials />
        <Contact />
        <Faq />
        <CtaBanner />
      </main>
      <Footer />
      <CookieBanner />
      <BackToTop />
    </div>
  )
}
