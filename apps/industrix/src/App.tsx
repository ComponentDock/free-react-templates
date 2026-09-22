import { useEffect } from 'react'
import { TopBar } from './components/TopBar'
import { Navbar } from './components/Navbar'
import { HeroSlider } from './components/HeroSlider'
import { BrandLogos } from './components/BrandLogos'
import { Services } from './components/Services'
import { Projects } from './components/Projects'
import { About } from './components/About'
import { Address } from './components/Address'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Industrix — Industrial & Construction Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-body transition-colors dark:bg-gray-950 dark:text-white">
      <header>
        <TopBar />
        <Navbar />
      </header>
      <main className="flex-1">
        <HeroSlider />
        <BrandLogos />
        <Services />
        <Projects />
        <About />
        <Address />
      </main>
      <Footer />
    </div>
  )
}
