import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { About } from './components/About'
import { CarModels } from './components/CarModels'
import { Facts } from './components/Facts'
import { Reviews } from './components/Reviews'
import { CallToAction } from './components/CallToAction'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Fleetly — Car Rental Template'
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <About />
        <CarModels />
        <Facts />
        <Reviews />
        <CallToAction />
        <Blog />
      </main>
      <Footer />
    </>
  )
}
