import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { MostVisited } from './components/MostVisited'
import { PopularCategories } from './components/PopularCategories'
import { WhyUs } from './components/WhyUs'
import { HowItWorks } from './components/HowItWorks'
import { Testimonials } from './components/Testimonials'
import { BlogTips } from './components/BlogTips'
import { CTA } from './components/CTA'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Locate — Directory Listing Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-gray-100">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <MostVisited />
        <PopularCategories />
        <WhyUs />
        <HowItWorks />
        <Testimonials />
        <BlogTips />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
