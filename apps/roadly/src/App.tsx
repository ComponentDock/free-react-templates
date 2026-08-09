import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { SearchBar } from './components/SearchBar'
import { Services } from './components/Services'
import { Cars } from './components/Cars'
import { HowItWorks } from './components/HowItWorks'
import { Testimonials } from './components/Testimonials'
import { About } from './components/About'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Roadly — Car Rental Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <SearchBar />
        <Services />
        <Cars />
        <HowItWorks />
        <Testimonials />
        <About />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
