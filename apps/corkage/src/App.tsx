import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Menu } from './components/Menu'
import { Testimonials } from './components/Testimonials'
import { Reservation } from './components/Reservation'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Corkage — Indian Restaurant Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-paper text-ink">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Menu />
        <Testimonials />
        <Reservation />
      </main>
      <Footer />
    </div>
  )
}
