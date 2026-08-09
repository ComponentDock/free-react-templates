import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Intro } from './components/Intro'
import { Services } from './components/Services'
import { Treatments } from './components/Treatments'
import { Therapies } from './components/Therapies'
import { Pricing } from './components/Pricing'
import { Testimony } from './components/Testimony'
import { Counter } from './components/Counter'
import { Blog } from './components/Blog'
import { Gallery } from './components/Gallery'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Serenity — Spa & Beauty'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-primary-600 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main" className="flex-1">
        <Hero />
        <Intro />
        <Services />
        <Treatments />
        <Therapies />
        <Pricing />
        <Testimony />
        <Counter />
        <Blog />
        <Gallery />
      </main>
      <Footer />
    </div>
  )
}
