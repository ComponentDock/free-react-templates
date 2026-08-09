import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Intro } from './components/Intro'
import { Services } from './components/Services'
import { Featured } from './components/Featured'
import { Stats } from './components/Stats'
import { Team } from './components/Team'
import { Gallery } from './components/Gallery'
import { Pricing } from './components/Pricing'
import { Appointment } from './components/Appointment'
import { Testimony } from './components/Testimony'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Terra — Beauty & Spa Wellness'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 dark:bg-gray-950">
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <Services />
        <Featured />
        <Stats />
        <Team />
        <Gallery />
        <Pricing />
        <Appointment />
        <Testimony />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
