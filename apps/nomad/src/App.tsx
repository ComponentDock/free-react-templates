import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Intro } from './components/Intro'
import { BlogSection } from './components/BlogSection'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Nomad — Travel Blog Template'
  }, [])

  return (
    <div className="bg-white font-sans text-body">
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <BlogSection />
      </main>
      <Footer />
    </div>
  )
}
