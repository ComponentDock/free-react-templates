import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Products } from './components/Products'
import { HomeAbout } from './components/HomeAbout'
import { Features } from './components/Features'
import { BrandLogos } from './components/BrandLogos'
import { AboutVideo } from './components/AboutVideo'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Mechbot — Robotics Landing Template'
  }, [])
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Products />
        <HomeAbout />
        <Features />
        <BrandLogos />
        <AboutVideo />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
