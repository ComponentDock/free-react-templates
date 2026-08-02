import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Arrivals } from './components/Arrivals'
import { Parallax } from './components/Parallax'
import { Gallery } from './components/Gallery'
import { Features } from './components/Features'
import { Performance } from './components/Performance'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Aurora — Style & Fashion Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Arrivals />
        <Parallax />
        <Gallery />
        <Features />
        <Performance />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
