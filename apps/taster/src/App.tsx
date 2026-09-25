import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { About } from './components/About'
import { ImageDivider } from './components/ImageDivider'
import { Chefs } from './components/Chefs'
import { Menu } from './components/Menu'
import { Services } from './components/Services'
import { Reservation } from './components/Reservation'
import { Testimonials } from './components/Testimonials'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Taster — Restaurant Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <About />
        <ImageDivider />
        <Chefs />
        <Menu />
        <Services />
        <Reservation />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
