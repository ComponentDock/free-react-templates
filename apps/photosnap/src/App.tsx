import { useEffect } from 'react'
import { Sidebar } from './components/Sidebar'
import { Hero } from './components/Hero'
import { InstagramGallery } from './components/InstagramGallery'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Photosnap — Photographer Portfolio'
  }, [])

  return (
    <div className="min-h-screen bg-white text-ink">
      <Sidebar />
      <div className="lg:ml-[22%]">
        <Hero />
        <main>
          <InstagramGallery />
        </main>
        <Footer />
      </div>
    </div>
  )
}
