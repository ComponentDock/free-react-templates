import { useEffect } from 'react'
import { Header } from './components/Header'
import { SocialRail } from './components/SocialRail'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { Services } from './components/Services'
import { Trainers } from './components/Trainers'
import { ClosingRow } from './components/ClosingRow'
import { Footer } from './components/Footer'
import { pageTitle, skipLabel } from './data'

export function App() {
  useEffect(() => {
    document.title = pageTitle
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-brand focus:px-4 focus:py-2 focus:text-white"
      >
        {skipLabel}
      </a>
      <Header />
      <SocialRail />
      <main id="main">
        <Hero />
        <Features />
        <Services />
        <Trainers />
        <ClosingRow />
      </main>
      <Footer />
    </div>
  )
}
