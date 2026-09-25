import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { BasicElements } from './components/BasicElements'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Swatchkit — Free UI Kit'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-dark text-white transition-colors">
      <header>
        <Navbar />
      </header>
      <main className="flex-1">
        <Hero />
        <BasicElements />
      </main>
      <Footer />
    </div>
  )
}
