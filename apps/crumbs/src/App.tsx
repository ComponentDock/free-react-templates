import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { PopularProducts } from './components/PopularProducts'
import { About } from './components/About'
import { Services } from './components/Services'
import { Testimonials } from './components/Testimonials'
import { InstagramFeed } from './components/InstagramFeed'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Crumbs — Cake Shop Landing'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <PopularProducts />
        <About />
        <Services />
        <Testimonials />
        <InstagramFeed />
      </main>
      <Footer />
    </div>
  )
}
