import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { SocialBar } from './components/SocialBar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Features } from './components/Features'
import { About } from './components/About'
import { Milestones } from './components/Milestones'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Talon — Modern Business Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-gray-100">
      <Navbar />
      <SocialBar />
      <main className="flex-1">
        <Hero />
        <Services />
        <Features />
        <About />
        <Milestones />
        <Testimonials />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
