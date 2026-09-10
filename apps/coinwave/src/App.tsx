import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Converter } from './components/Converter'
import { Services } from './components/Services'
import { About } from './components/About'
import { Features } from './components/Features'
import { Stats } from './components/Stats'
import { CallToAction } from './components/CallToAction'
import { Pricing } from './components/Pricing'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'CoinWave — Cryptocurrency Landing'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-dark-bg">
      <Navbar />
      <main>
        <Hero />
        <Converter />
        <Services />
        <About />
        <Features />
        <Stats />
        <CallToAction />
        <Pricing />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
