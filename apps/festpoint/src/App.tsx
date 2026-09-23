import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Counter } from './components/Counter'
import { Speakers } from './components/Speakers'
import { Schedule } from './components/Schedule'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Festpoint — Conference & Event Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Counter />
        <Speakers />
        <Schedule />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
