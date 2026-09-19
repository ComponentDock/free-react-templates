import { useEffect } from 'react'
import { AnnouncementBar } from './components/AnnouncementBar'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Categories } from './components/Categories'
import { FeaturedCollection } from './components/FeaturedCollection'
import { BenefitsStrip } from './components/BenefitsStrip'
import { NewArrivals } from './components/NewArrivals'
import { Testimonials } from './components/Testimonials'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Lacecraft — Premium Footwear'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
      <AnnouncementBar />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Categories />
        <FeaturedCollection />
        <BenefitsStrip />
        <NewArrivals />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
