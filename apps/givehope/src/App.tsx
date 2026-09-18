import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { Callout } from './components/Callout'
import { Counters } from './components/Counters'
import { Causes } from './components/Causes'
import { CTABanner } from './components/CTABanner'
import { Volunteers } from './components/Volunteers'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'GiveHope — Charity & Nonprofit Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-heading transition-colors dark:bg-gray-950 dark:text-gray-100">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <Callout />
        <Counters />
        <Causes />
        <CTABanner />
        <Volunteers />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
