import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Stats } from './components/Stats'
import { Services } from './components/Services'
import { Portfolio } from './components/Portfolio'
import { VideoCta } from './components/VideoCta'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Panorama — Web Agency Portfolio'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stats />
        <Services />
        <Portfolio />
        <VideoCta />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
