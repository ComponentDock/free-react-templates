import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Reservly — Book Your Stay'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink">
      <Navbar />
      <main className="flex-1">
        <Hero />
      </main>
      <Footer />
    </div>
  )
}
