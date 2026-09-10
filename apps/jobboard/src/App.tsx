import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { TrendingKeywords } from './components/TrendingKeywords'
import { StatsCounter } from './components/StatsCounter'
import { JobListings } from './components/JobListings'
import { CtaBanner } from './components/CtaBanner'
import { CompanyLogos } from './components/CompanyLogos'
import { MobileAppCta } from './components/MobileAppCta'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'JobBoard — Find Your Dream Job'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <TrendingKeywords />
        <StatsCounter />
        <JobListings />
        <CtaBanner />
        <CompanyLogos />
        <MobileAppCta />
      </main>
      <Footer />
    </div>
  )
}
