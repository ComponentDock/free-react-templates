import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Sermon } from './components/Sermon'
import { About } from './components/About'
import { Features } from './components/Features'
import { Events } from './components/Events'
import { Footer } from './components/Footer'
import { sectionHeading } from './data'

export function App() {
  useEffect(() => {
    document.title = 'Synod — Church Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Sermon />
        <div className="py-10 text-center">
          <p className="text-xl text-heading">{sectionHeading}</p>
        </div>
        <About />
        <Features />
        <Events />
      </main>
      <Footer />
    </div>
  )
}
