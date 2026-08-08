import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { ServiceTimes } from './components/ServiceTimes'
import { WhatToExpect } from './components/WhatToExpect'
import { WatchListen } from './components/WatchListen'
import { GetInvolved } from './components/GetInvolved'
import { Stories } from './components/Stories'
import { CtaStats } from './components/CtaStats'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Congregate — Church Community Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-charcoal-900 dark:bg-charcoal-900 dark:text-white">
      <Navbar />
      <main>
        <Hero />
        <ServiceTimes />
        <WhatToExpect />
        <WatchListen />
        <GetInvolved />
        <Stories />
        <CtaStats />
      </main>
      <Footer />
    </div>
  )
}
