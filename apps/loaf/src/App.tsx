import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Categories } from './components/Categories'
import { VideoSection } from './components/VideoSection'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Loaf — Bakery Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-body">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Categories />
        <VideoSection />
        <Testimonials />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
