import { useEffect } from 'react'
import { TopBar } from './components/TopBar'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { About } from './components/About'
import { Team } from './components/Team'
import { Pricing } from './components/Pricing'
import { FAQ } from './components/FAQ'
import { Testimonials } from './components/Testimonials'
import { Projects } from './components/Projects'
import { Blog } from './components/Blog'
import { Services } from './components/Services'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Pillar — Architecture & Interior Design Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <About />
        <Team />
        <Pricing />
        <FAQ />
        <Testimonials />
        <Projects />
        <Blog />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
