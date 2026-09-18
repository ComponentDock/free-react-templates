import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Categories } from './components/Categories'
import { RecentJobs } from './components/RecentJobs'
import { FeaturedJobs } from './components/FeaturedJobs'
import { Testimonials } from './components/Testimonials'
import { CtaBanner } from './components/CtaBanner'
import { Footer } from './components/Footer'

export default function App() {
  useEffect(() => {
    document.title = 'Careerly — Job Board Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <RecentJobs />
        <FeaturedJobs />
        <Testimonials />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  )
}
