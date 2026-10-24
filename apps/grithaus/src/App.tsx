import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Promos } from './components/Promos'
import { About } from './components/About'
import { Experts } from './components/Experts'
import { Services } from './components/Services'
import { Pricing } from './components/Pricing'
import { HoursNewsletter } from './components/HoursNewsletter'
import { Footer } from './components/Footer'
import { pageTitle, siteName, skipLabel } from './data'

export function App() {
  useEffect(() => {
    document.title = pageTitle
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-brand focus:px-4 focus:py-2 focus:text-white"
      >
        {skipLabel}
      </a>
      <Navbar />
      <main id="main">
        <h1 className="sr-only">
          {siteName} — coached strength and conditioning club
        </h1>
        <Hero />
        <Promos />
        <About />
        <Experts />
        <Services />
        <Pricing />
        <HoursNewsletter />
      </main>
      <Footer />
    </div>
  )
}
