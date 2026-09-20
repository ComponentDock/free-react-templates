import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Welcome } from './components/Welcome'
import { Knowledge } from './components/Knowledge'
import { Stats } from './components/Stats'
import { Courses } from './components/Courses'
import { Teachers } from './components/Teachers'
import { News } from './components/News'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Ethos — Education Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Welcome />
        <Knowledge />
        <Stats />
        <Courses />
        <Teachers />
        <News />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
