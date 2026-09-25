import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Portfolio } from './components/Portfolio'
import { About } from './components/About'
import { News } from './components/News'
import { VideoSection } from './components/Video'
import { Skills } from './components/Skills'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'BoxPulse — Creative Digital Agency Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900 transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <News />
        <VideoSection />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
