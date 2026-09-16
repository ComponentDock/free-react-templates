import { useEffect } from 'react'
import { TopBar } from './components/TopBar'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { AboutDonation } from './components/AboutDonation'
import { Services } from './components/Services'
import { Causes } from './components/Causes'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { Volunteers } from './components/Volunteers'
import { CTABanner } from './components/CTABanner'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Mercy — Charity & Nonprofit Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <TopBar />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <AboutDonation />
        <Services />
        <Causes />
        <Testimonials />
        <Blog />
        <Volunteers />
        <CTABanner />
      </main>
      <Footer />
    </div>
  )
}
