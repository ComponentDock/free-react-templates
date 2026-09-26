import { useEffect } from 'react'
import { Sidebar } from './components/Sidebar'
import { Hero } from './components/Hero'
import { InstagramGrid } from './components/InstagramGrid'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Photomuse — Photographer Portfolio Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-body">
      <Sidebar />
      <main>
        <Hero />
        <InstagramGrid />
      </main>
      <Footer />
    </div>
  )
}
