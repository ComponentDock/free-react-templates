import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { About } from './components/About'
import { CtaBanner } from './components/CtaBanner'
import { Departments } from './components/Departments'
import { Testimonials } from './components/Testimonials'
import { Stats } from './components/Stats'
import { Pricing } from './components/Pricing'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Healwise — Healthcare & Medical Landing'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-page text-mist transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <About />
        <CtaBanner />
        <Departments />
        <Testimonials />
        <Stats />
        <Pricing />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
