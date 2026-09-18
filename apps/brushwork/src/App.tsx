import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Experience } from './components/Experience'
import { Testimonials } from './components/Testimonials'
import { Services } from './components/Services'
import { VideoShowcase } from './components/VideoShowcase'
import { ServicesCompact } from './components/ServicesCompact'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Brushwork — Art & Crafting Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-mist">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Experience />
        <Testimonials />
        <Services />
        <VideoShowcase />
        <ServicesCompact />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
