import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { Screenshot } from './components/Screenshot'
import { AboutAuthor } from './components/AboutAuthor'
import { Testimonials } from './components/Testimonials'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'BookCraft — Author Book Landing'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Screenshot />
        <AboutAuthor />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
