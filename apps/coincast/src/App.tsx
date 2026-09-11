import { useEffect } from 'react'
import { Header } from './components/Header'
import { HeroSlider } from './components/HeroSlider'
import { Featured } from './components/Featured'
import { AboutContent } from './components/AboutContent'
import { Services } from './components/Services'
import { Stats } from './components/Stats'
import { Testimonials } from './components/Testimonials'
import { CtaBanner } from './components/CtaBanner'
import { Resources } from './components/Resources'
import { Team } from './components/Team'
import { Contact } from './components/Contact'
import { Investments } from './components/Investments'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Coincast — Cryptocurrency Agency Template'
  }, [])

  return (
    <div className="min-h-screen bg-white text-gray-900 transition-colors dark:bg-gray-950 dark:text-white">
      <Header />
      <main>
        <HeroSlider />
        <Featured />
        <AboutContent />
        <Services />
        <Stats />
        <Testimonials />
        <CtaBanner />
        <Resources />
        <Team />
        <Contact />
        <Investments />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
