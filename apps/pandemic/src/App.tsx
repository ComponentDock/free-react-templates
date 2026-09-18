import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Statistics } from './components/Statistics'
import { WhatIsCovid } from './components/WhatIsCovid'
import { Prevention } from './components/Prevention'
import { ProtectYourself } from './components/ProtectYourself'
import { Symptoms } from './components/Symptoms'
import { News } from './components/News'
import { About } from './components/About'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Pandemic — Health Information Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Statistics />
        <WhatIsCovid />
        <Prevention />
        <ProtectYourself />
        <Symptoms />
        <News />
        <About />
      </main>
      <Footer />
    </div>
  )
}
