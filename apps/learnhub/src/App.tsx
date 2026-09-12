import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { About } from './components/About'
import { Stats } from './components/Stats'
import { Courses } from './components/Courses'
import { Platform } from './components/Platform'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Learnhub — Online Education Platform'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <About />
        <Stats />
        <Courses />
        <Platform />
        <Testimonials />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
