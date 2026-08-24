import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Destinations } from './components/Destinations'
import { Testimonials } from './components/Testimonials'
import { Faq } from './components/Faq'
import { Blog } from './components/Blog'
import { Cta } from './components/Cta'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Voyage — Travel & Tourism Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Destinations />
        <Testimonials />
        <Faq />
        <Blog />
        <Cta />
      </main>
      <Footer />
    </div>
  )
}
