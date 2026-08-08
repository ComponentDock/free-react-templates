import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Cta } from './components/Cta'
import { Stats } from './components/Stats'
import { Projects } from './components/Projects'
import { Team } from './components/Team'
import { Blog } from './components/Blog'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Facet — Architecture Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <Cta />
        <Stats />
        <Projects />
        <Team />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
