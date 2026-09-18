import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { ProjectGallery } from './components/ProjectGallery'
import { About } from './components/About'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Grain — Interior Design Portfolio Template'
  }, [])

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <ProjectGallery />
        <About />
      </main>
      <Footer />
    </div>
  )
}
