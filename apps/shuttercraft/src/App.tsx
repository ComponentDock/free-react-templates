import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Gallery } from './components/Gallery'
import { CallToAction } from './components/CallToAction'
import { Blog } from './components/Blog'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Shuttercraft — Photography Portfolio'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Gallery />
        <CallToAction />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
