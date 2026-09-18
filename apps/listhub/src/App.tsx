import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Categories } from './components/Categories'
import { FeatureBlock } from './components/FeatureBlock'
import { FeaturedListings } from './components/FeaturedListings'
import { HowItWorks } from './components/HowItWorks'
import { Testimonials } from './components/Testimonials'
import { Newsletter } from './components/Newsletter'
import { BlogPosts } from './components/BlogPosts'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Listhub — Directory Listing Template'
  }, [])

  return (
    <div className="min-h-screen bg-white text-text-dark transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <FeatureBlock />
        <FeaturedListings />
        <HowItWorks />
        <Testimonials />
        <Newsletter />
        <BlogPosts />
      </main>
      <Footer />
    </div>
  )
}
