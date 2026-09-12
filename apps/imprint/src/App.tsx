import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Intro } from './components/Intro'
import { Services } from './components/Services'
import { Portfolio } from './components/Portfolio'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Imprint — Personal Portfolio Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <Services />
        <Portfolio />
      </main>
      <Footer />
    </div>
  )
}
