import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { Testimonials } from './components/Testimonials'
import { OfferedServices } from './components/OfferedServices'
import { Stats } from './components/Stats'
import { Services } from './components/Services'
import { AboutInfo } from './components/AboutInfo'
import { AboutVideo } from './components/AboutVideo'
import { BrandLogos } from './components/BrandLogos'
import { ContactForm } from './components/ContactForm'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Dialpad — Call Center Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <Testimonials />
        <OfferedServices />
        <Stats />
        <Services />
        <AboutInfo />
        <AboutVideo />
        <BrandLogos />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
