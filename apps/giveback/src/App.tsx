import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { UpcomingProgram } from './components/UpcomingProgram'
import { About } from './components/About'
import { Causes } from './components/Causes'
import { WhatWeDo } from './components/WhatWeDo'
import { Services } from './components/Services'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

/** Giveback — one-page charity foundation template.
 *  Section order matches the reference design 1:1: navbar → hero → upcoming
 *  program → about → cause cards → what we are doing → how we help people →
 *  latest blog → footer. */
export function App() {
  useEffect(() => {
    document.title = 'Giveback — Charity Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-ink transition-colors dark:bg-gray-950">
      <Navbar />
      <main>
        <Hero />
        <UpcomingProgram />
        <About />
        <Causes />
        <WhatWeDo />
        <Services />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
