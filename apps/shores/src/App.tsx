import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Causes } from './components/Causes'
import { About } from './components/About'
import { FeaturedCauses } from './components/FeaturedCauses'
import { Events } from './components/Events'
import { Team } from './components/Team'
import { CtaBanner } from './components/CtaBanner'
import { Blog } from './components/Blog'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Shores — Charity & Nonprofit Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Causes />
        <About />
        <FeaturedCauses />
        <Events />
        <Team />
        <CtaBanner />
        <Blog />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
