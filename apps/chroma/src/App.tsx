import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { WhoWeAre } from './components/WhoWeAre'
import { WhatWeDo } from './components/WhatWeDo'
import { Works } from './components/Works'
import { Stats } from './components/Stats'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Chroma — Studio Landing Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-gray-100">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <WhoWeAre />
        <WhatWeDo />
        <Works />
        <Stats />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
