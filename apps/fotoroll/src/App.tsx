import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Portfolio } from './components/Portfolio'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'
import { useEffect } from 'react'

export function App() {
  useEffect(() => {
    document.title = 'Fotoroll — Photography Portfolio'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-paper text-ink transition-colors">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Portfolio />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
