import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Services } from './components/Services'
import { Stats } from './components/Stats'
import { Works } from './components/Works'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Craftwork — UI/UX Designer Portfolio'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-paper text-ink">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Stats />
        <Works />
      </main>
      <Footer />
    </div>
  )
}
