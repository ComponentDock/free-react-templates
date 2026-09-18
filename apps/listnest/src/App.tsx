import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { FindPlaces } from './components/FindPlaces'
import { FeaturedPlaces } from './components/FeaturedPlaces'
import { BrowseCategories } from './components/BrowseCategories'
import { AddListing } from './components/AddListing'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'ListNest — Directory & Listing Template'
  }, [])

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <FindPlaces />
      <FeaturedPlaces />
      <BrowseCategories />
      <AddListing />
      <Footer />
    </div>
  )
}
