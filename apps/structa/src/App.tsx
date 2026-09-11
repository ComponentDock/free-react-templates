import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Services } from './components/Services'
import { Projects } from './components/Projects'
import { MoreCTA } from './components/MoreCTA'
import { Testimonials } from './components/Testimonials'
import { Contact } from './components/Contact'
import { BannerCTA } from './components/BannerCTA'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Structa — Construction Company Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-mist transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Projects />
        <MoreCTA />
        <Testimonials />
        <Contact />
        <BannerCTA />
      </main>
      <Footer />
    </div>
  )
}
