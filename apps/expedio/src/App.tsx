import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { About } from './components/About'
import { Tours } from './components/Tours'
import { Testimonials } from './components/Testimonials'
import { SearchPackage } from './components/SearchPackage'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Expedio — Travel Agency Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-gray-100">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <About />
        <Tours />
        <Testimonials />
        <SearchPackage />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
