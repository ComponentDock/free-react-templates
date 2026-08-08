import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Menu } from './components/Menu'
import { Story } from './components/Story'
import { Process } from './components/Process'
import { Shop } from './components/Shop'
import { Testimonials } from './components/Testimonials'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Mocha — Astro Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900 transition-colors dark:bg-gray-950 dark:text-gray-100">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Menu />
        <Story />
        <Process />
        <Shop />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
