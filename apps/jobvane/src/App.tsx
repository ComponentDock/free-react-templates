import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { FeatureBar } from './components/FeatureBar'
import { TopCategories } from './components/TopCategories'
import { BrowseSpecialism } from './components/BrowseSpecialism'
import { HotJobs } from './components/HotJobs'
import { Testimonials } from './components/Testimonials'
import { Candidates } from './components/Candidates'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'JobVane — Job Board Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-gray-100">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <FeatureBar />
        <TopCategories />
        <BrowseSpecialism />
        <HotJobs />
        <Testimonials />
        <Candidates />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
