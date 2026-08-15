import { useEffect } from 'react'
import { TopBar } from './components/TopBar'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { News } from './components/News'
import { Offer } from './components/Offer'
import { Projects } from './components/Projects'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'
import { skipLabel, siteName } from './data'

export function App() {
  useEffect(() => {
    document.title = `${siteName} — Furniture & Interior Design`
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-body">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-brand focus:px-4 focus:py-2 focus:text-white"
      >
        {skipLabel}
      </a>
      <TopBar />
      <Navbar />
      <main id="main">
        <Hero />
        <News />
        <Offer />
        <Projects />
        <Testimonials />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
