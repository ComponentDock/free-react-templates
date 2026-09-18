import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { AboutTop } from './components/AboutTop'
import { Features } from './components/Features'
import { Offer } from './components/Offer'
import { AboutBottom } from './components/AboutBottom'
import { Process } from './components/Process'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Brio — Bright App Landing Page'
  }, [])

  return (
    <div className="min-h-screen font-poppins text-brio-dark">
      <Hero />
      <Navbar />
      <AboutTop />
      <Features />
      <Offer />
      <AboutBottom />
      <Process />
      <Newsletter />
      <Footer />
    </div>
  )
}
