import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Features } from './components/Features'
import { Counters } from './components/Counters'
import { Pricing } from './components/Pricing'
import { Courses } from './components/Courses'
import { AppDownload } from './components/AppDownload'
import { Testimonials } from './components/Testimonials'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Liber — Author Book Landing Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Features />
        <Counters />
        <Pricing />
        <Courses />
        <AppDownload />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}
