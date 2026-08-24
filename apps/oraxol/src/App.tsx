import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Portfolio } from './components/Portfolio'
import { Testimonials } from './components/Testimonials'
import { Team } from './components/Team'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Oraxol — Portfolio & Creative Agency'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-dark-base text-muted transition-colors">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <Portfolio />
        <Testimonials />
        <Team />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
