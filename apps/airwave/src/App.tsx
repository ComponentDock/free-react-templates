import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Preloader } from './components/Preloader'
import { Hero } from './components/Hero'
import { FeaturedEpisode } from './components/FeaturedEpisode'
import { Episodes } from './components/Episodes'
import { Host } from './components/Host'
import { Sponsors } from './components/Sponsors'
import { Testimonials } from './components/Testimonials'
import { Newsletter } from './components/Newsletter'
import { Faq } from './components/Faq'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { CookieConsent } from './components/CookieConsent'
import { BackToTop } from './components/BackToTop'

export function App() {
  useEffect(() => {
    document.title = 'Airwave — Podcast'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-gray-950 font-sans text-white transition-colors">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-primary-600 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>
      <Preloader />
      <Navbar />
      <main id="main" className="flex-1">
        <Hero />
        <FeaturedEpisode />
        <Episodes />
        <Host />
        <Sponsors />
        <Testimonials />
        <Newsletter />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <CookieConsent />
      <BackToTop />
    </div>
  )
}
