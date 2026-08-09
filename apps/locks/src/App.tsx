import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { InfoBar } from './components/InfoBar'
import { Welcome } from './components/Welcome'
import { Services } from './components/Services'
import { WhatWeDo } from './components/WhatWeDo'
import { Pricing } from './components/Pricing'
import { Discount } from './components/Discount'
import { Team } from './components/Team'
import { Shop } from './components/Shop'
import { Gallery } from './components/Gallery'
import { Counter } from './components/Counter'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Locks — Hair Salon Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <InfoBar />
        <Welcome />
        <Services />
        <WhatWeDo />
        <Pricing />
        <Discount />
        <Team />
        <Shop />
        <Gallery />
        <Counter />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
