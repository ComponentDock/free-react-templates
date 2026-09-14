import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { StatsBar } from './components/StatsBar'
import { Services } from './components/Services'
import { RoiCalculator } from './components/RoiCalculator'
import { InstallationTimeline } from './components/InstallationTimeline'
import { Testimonials } from './components/Testimonials'
import { CtaBanner } from './components/CtaBanner'
import { Faq } from './components/Faq'
import { ContactForm } from './components/ContactForm'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Sunflux — Solar Energy Template'
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
        <RoiCalculator />
        <InstallationTimeline />
        <Testimonials />
        <CtaBanner />
        <Faq />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
