import { useEffect } from 'react'
import { AboutBlock } from './components/AboutBlock'
import { Blog } from './components/Blog'
import { CtaBand } from './components/CtaBand'
import { Features } from './components/Features'
import { Footer } from './components/Footer'
import { HeroSlider } from './components/HeroSlider'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'
import { ServicesRow } from './components/ServicesRow'
import { Testimonials } from './components/Testimonials'
import { aboutBlocks } from './data'

export function App() {
  useEffect(() => {
    document.title = 'Metalwork — Industrial Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 antialiased">
      <Navbar />
      <main>
        <HeroSlider />
        <Features />
        <ServicesRow />
        <AboutBlock {...aboutBlocks[0]!} />
        <AboutBlock {...aboutBlocks[1]!} reversed tone="surface" />
        <Projects />
        <Testimonials />
        <Blog />
        <CtaBand />
      </main>
      <Footer />
    </div>
  )
}
