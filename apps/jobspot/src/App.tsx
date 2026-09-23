import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { JobSearchBar } from './components/JobSearchBar'
import { Services } from './components/Services'
import { Categories } from './components/Categories'
import { FeaturedJobs } from './components/FeaturedJobs'
import { CtaBanner } from './components/CtaBanner'
import { Testimonials } from './components/Testimonials'
import { Candidates } from './components/Candidates'
import { RecentBlog } from './components/RecentBlog'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'JobSpot — Job Board Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900 transition-colors dark:bg-gray-950 dark:text-gray-100">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <JobSearchBar />
        <Services />
        <Categories />
        <FeaturedJobs />
        <CtaBanner />
        <Testimonials />
        <Candidates />
        <RecentBlog />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
