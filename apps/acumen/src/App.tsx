import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Services } from './components/Services'
import { Skills } from './components/Skills'
import { Portfolio } from './components/Portfolio'
import { Team } from './components/Team'
import { Pricing } from './components/Pricing'
import { Blog } from './components/Blog'
import { Counter } from './components/Counter'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Acumen — Business Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Skills />
        <Portfolio />
        <Team />
        <Pricing />
        <Blog />
        <Counter />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
