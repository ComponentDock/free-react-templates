import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Stats } from './components/Stats'
import { Services } from './components/Services'
import { Grow } from './components/Grow'
import { Projects } from './components/Projects'
import { Promo } from './components/Promo'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Anvil — Industrial & Technical Solutions Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Stats />
        <Services />
        <Grow />
        <Projects />
        <Promo />
      </main>
      <Footer />
    </div>
  )
}
