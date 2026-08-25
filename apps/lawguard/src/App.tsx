import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Services } from './components/Services'
import { SecurityConsultants } from './components/SecurityConsultants'
import { PracticeArea } from './components/PracticeArea'
import { Testimonials } from './components/Testimonials'
import { Resources } from './components/Resources'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Lawguard — Legal & Investigation Services'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <SecurityConsultants />
        <PracticeArea />
        <Testimonials />
        <Resources />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
