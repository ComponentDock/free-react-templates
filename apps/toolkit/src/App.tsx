import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { BasicElements } from './components/BasicElements'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Toolkit — UI Kit Showcase Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <BasicElements />
      </main>
      <Footer />
    </div>
  )
}
