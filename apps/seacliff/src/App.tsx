import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Preloader } from './components/Preloader'
import { Hero } from './components/Hero'
import { Stats } from './components/Stats'
import { Rooms } from './components/Rooms'
import { Amenities } from './components/Amenities'
import { Dining } from './components/Dining'
import { Gallery } from './components/Gallery'
import { Testimonials } from './components/Testimonials'
import { Faq } from './components/Faq'
import { Cta } from './components/Cta'
import { Footer } from './components/Footer'
import { CookieConsent } from './components/CookieConsent'
import { BackToTop } from './components/BackToTop'

export function App() {
  useEffect(() => {
    document.title = 'Seacliff — Luxury Resort Hotel'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-gray-900 transition-colors dark:bg-gray-950 dark:text-white">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-accent-500 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>
      <Preloader />
      <Navbar />
      <main id="main" className="flex-1">
        <Hero />
        <Stats />
        <Rooms />
        <Amenities />
        <Dining />
        <Gallery />
        <Testimonials />
        <Faq />
        <Cta />
      </main>
      <Footer />
      <CookieConsent />
      <BackToTop />
    </div>
  )
}
