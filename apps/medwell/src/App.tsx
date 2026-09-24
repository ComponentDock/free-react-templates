import { useEffect } from 'react'
import { TopBar } from './components/TopBar'
import { Navbar } from './components/Navbar'
import { HeroBanner } from './components/HeroBanner'
import { FeatureStrip } from './components/FeatureStrip'
import { Services } from './components/Services'
import { About } from './components/About'
import { Team } from './components/Team'
import { Appointment } from './components/Appointment'
import { Testimonials } from './components/Testimonials'
import { Hotline } from './components/Hotline'
import { Blog } from './components/Blog'
import { Brands } from './components/Brands'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Medwell — Medical & Healthcare'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <header>
        <TopBar />
        <Navbar />
      </header>
      <main className="flex-1">
        <HeroBanner />
        <FeatureStrip />
        <Services />
        <About />
        <Team />
        <Appointment />
        <Testimonials />
        <Hotline />
        <Blog />
        <Brands />
      </main>
      <Footer />
    </div>
  )
}
