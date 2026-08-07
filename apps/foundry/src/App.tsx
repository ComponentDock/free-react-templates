import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Welcome } from './components/Welcome'
import { Work } from './components/Work'
import { Counters } from './components/Counters'
import { Services } from './components/Services'
import { Blog } from './components/Blog'
import { Engineers } from './components/Engineers'
import { Testimonials } from './components/Testimonials'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Foundry — Construction Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Welcome />
        <Work />
        <Counters />
        <Services />
        <Blog />
        <Engineers />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
