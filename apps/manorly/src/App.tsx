import { useEffect } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Services } from './components/Services'
import { ServicesBanner } from './components/ServicesBanner'
import { Gallery } from './components/Gallery'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Manorly — City Real Estate'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-ink">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Services />
        <ServicesBanner />
        <Gallery />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
