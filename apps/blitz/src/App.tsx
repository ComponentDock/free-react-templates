import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { IconBoxes } from './components/IconBoxes'
import { AboutSection } from './components/AboutSection'
import { Services } from './components/Services'
import { Features } from './components/Features'
import { Cta } from './components/Cta'
import { TextLine } from './components/TextLine'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Blitz — Creative Agency Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <IconBoxes />
        <AboutSection />
        <Services />
        <Features />
        <Cta />
        <TextLine />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
