import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Brands } from './components/Brands'
import { About } from './components/About'
import { Works } from './components/Works'
import { Jobs } from './components/Jobs'
import { Services } from './components/Services'
import { Testimonials } from './components/Testimonials'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Artisan — Personal Portfolio Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Brands />
        <About />
        <Works />
        <Jobs />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
