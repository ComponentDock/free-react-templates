import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { IntroQuote } from './components/IntroQuote'
import { About } from './components/About'
import { BooksGallery } from './components/BooksGallery'
import { StatsCounter } from './components/StatsCounter'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Folio — Author Portfolio Template'
  }, [])
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 dark:bg-gray-950 dark:text-gray-100">
      <Navbar />
      <main>
        <Hero />
        <IntroQuote />
        <About />
        <BooksGallery />
        <StatsCounter />
      </main>
      <Footer />
    </div>
  )
}
