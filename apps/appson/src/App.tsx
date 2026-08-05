import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Features } from './components/Features'
import { Screenshots } from './components/Screenshots'
import { Download } from './components/Download'
import { Pricing } from './components/Pricing'
import { Team } from './components/Team'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Appson — App Landing Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900 transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Features />
        <Screenshots />
        <Download />
        <Pricing />
        <Team />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
