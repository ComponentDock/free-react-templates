import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { Projects } from './components/Projects'
import { Facts } from './components/Facts'
import { Services } from './components/Services'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Edifice — Construction Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <Projects />
        <Facts />
        <Services />
        <Testimonials />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
