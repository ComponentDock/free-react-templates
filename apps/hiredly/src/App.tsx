import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { JobListings } from './components/JobListings'
import { Services } from './components/Services'
import { Pricing } from './components/Pricing'
import { WhyDifferent } from './components/WhyDifferent'
import { Subscribe } from './components/Subscribe'
import { CtaBand } from './components/CtaBand'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Hiredly — Job Board Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-body">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <JobListings />
        <Services />
        <Pricing />
        <WhyDifferent />
        <Subscribe />
        <CtaBand />
      </main>
      <Footer />
    </div>
  )
}
