import { useEffect } from 'react'
import { TopBar } from './components/TopBar'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { About } from './components/About'
import { Counter } from './components/Counter'
import { FAQ } from './components/FAQ'
import { Team } from './components/Team'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Innovex — Digital Agency Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-gray-100">
      <TopBar />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <About />
        <Counter />
        <FAQ />
        <Team />
      </main>
      <Footer />
    </div>
  )
}
