import { useEffect } from 'react'
import { TopBar } from './components/TopBar'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { About } from './components/About'
import { Services } from './components/Services'
import { Gallery } from './components/Gallery'
import { WhyChooseUs } from './components/WhyChooseUs'
import { Testimonials } from './components/Testimonials'
import { ContactCTA } from './components/ContactCTA'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Crane — Construction Company Landing Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-gray-100">
      <TopBar />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <About />
        <Services />
        <Gallery />
        <WhyChooseUs />
        <Testimonials />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  )
}
