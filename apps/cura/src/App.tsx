import { useEffect } from 'react'
import { TopBar } from './components/TopBar'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Slider } from './components/Slider'
import { Services } from './components/Services'
import { Doctors } from './components/Doctors'
import { Booking } from './components/Booking'
import { Emergency } from './components/Emergency'
import { Testimonials } from './components/Testimonials'
import { Insurance } from './components/Insurance'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { CookieConsent } from './components/CookieConsent'
import { BackToTop } from './components/BackToTop'
import { Reveal } from './components/Reveal'

export function App() {
  useEffect(() => {
    document.title = 'Cura — Healthcare Center'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-gray-900 transition-colors dark:bg-gray-950 dark:text-white">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-primary-600 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>
      <TopBar />
      <Navbar />
      <main id="main" className="flex-1">
        <Hero />
        <Slider />
        <Services />
        <Doctors />
        <Booking />
        <Emergency />
        <Reveal>
          <Testimonials />
        </Reveal>
        <Insurance />
        <About />
        <Contact />
      </main>
      <Footer />
      <CookieConsent />
      <BackToTop />
    </div>
  )
}
