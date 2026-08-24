import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Intro } from './components/Intro'
import { Counter } from './components/Counter'
import { Causes } from './components/Causes'
import { CtaImage } from './components/CtaImage'
import { Volunteers } from './components/Volunteers'
import { Testimonials } from './components/Testimonials'
import { CtaBanner } from './components/CtaBanner'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Cuddle — Charity & Donation Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Intro />
        <Counter />
        <Causes />
        <CtaImage />
        <Volunteers />
        <Testimonials />
        <CtaBanner />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
