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
import { News } from './components/News'
import { Services } from './components/Services'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Archcraft — Architecture Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <TopBar />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <About />
        <Team />
        <Pricing />
        <FAQ />
        <Testimonials />
        <Projects />
        <News />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
