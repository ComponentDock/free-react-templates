import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { StatsBand } from './components/StatsBand'
import { Defense } from './components/Defense'
import { Testimonials } from './components/Testimonials'
import { Contact } from './components/Contact'
import { Faq } from './components/Faq'
import { Cta } from './components/Cta'
import { Footer } from './components/Footer'
import { CookieBanner } from './components/CookieBanner'
import { BackToTop } from './components/BackToTop'

export function App() {
  useEffect(() => {
    document.title = 'Aegis — Security Template'
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
        <StatsBand />
        <Defense />
        <Testimonials />
        <Contact />
        <Faq />
        <Cta />
      </main>
      <Footer />
      <CookieBanner />
      <BackToTop />
    </div>
  )
}
