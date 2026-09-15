import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Cta } from './components/Cta'
import { About } from './components/About'
import { Activities } from './components/Activities'
import { Donate } from './components/Donate'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Creed — Church Website Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-poppins text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Cta />
        <About />
        <Activities />
        <Donate />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
