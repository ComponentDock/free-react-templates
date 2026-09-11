import { useEffect } from 'react'
import { Topbar } from './components/Topbar'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Features } from './components/Features'
import { Counter } from './components/Counter'
import { Industries } from './components/Industries'
import { Process } from './components/Process'
import { Testimonials } from './components/Testimonials'
import { Pricing } from './components/Pricing'
import { CTA } from './components/CTA'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'TidyWash — Cleaning Service Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-ink">
      <Topbar />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Features />
        <Counter />
        <Industries />
        <Process />
        <Testimonials />
        <Pricing />
        <CTA />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
