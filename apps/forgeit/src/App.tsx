import { useEffect } from 'react'
import { TopBar } from './components/TopBar'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { Portfolio } from './components/Portfolio'
import { DarkFeatureStrip } from './components/DarkFeatureStrip'
import { Testimonials } from './components/Testimonials'
import { Services } from './components/Services'
import { About } from './components/About'
import { Team } from './components/Team'
import { Blog } from './components/Blog'
import { Contact } from './components/Contact'
import { CtaBanner } from './components/CtaBanner'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Forgeit — Creative Agency Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-body">
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Portfolio />
        <DarkFeatureStrip />
        <Testimonials />
        <Services />
        <About />
        <Team />
        <Blog />
        <Contact />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  )
}
