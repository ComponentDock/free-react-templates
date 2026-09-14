import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Testimonials } from './components/Testimonials'
import { Spaces } from './components/Spaces'
import { Features } from './components/Features'
import { VideoSection } from './components/VideoSection'
import { Brands } from './components/Brands'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Workhive — Coworking & Shared Workspace Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Testimonials />
        <Spaces />
        <Features />
        <VideoSection />
        <Brands />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
