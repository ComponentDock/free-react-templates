import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { JobSearchBar } from './components/JobSearchBar'
import { PopularCategories } from './components/PopularCategories'
import { JobListings } from './components/JobListings'
import { FeaturedCandidates } from './components/FeaturedCandidates'
import { TopCompanies } from './components/TopCompanies'
import { CtaBanner } from './components/CtaBanner'
import { Testimonials } from './components/Testimonials'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'JobNest — Find Your Dream Job'
  }, [])

  return (
    <div className="min-h-screen bg-white text-text-primary">
      <Navbar />
      <main>
        <Hero />
        <JobSearchBar />
        <PopularCategories />
        <JobListings />
        <FeaturedCandidates />
        <TopCompanies />
        <CtaBanner />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}
