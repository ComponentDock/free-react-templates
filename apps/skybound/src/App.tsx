import { useEffect } from 'react'
import { Amenities } from './components/Amenities'
import { BestPlans } from './components/BestPlans'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Newsletter } from './components/Newsletter'
import { OffCanvasMenu } from './components/OffCanvasMenu'
import { PackageSearch } from './components/PackageSearch'
import { PopularPlaces } from './components/PopularPlaces'
import { Testimonials } from './components/Testimonials'
import { TopBar } from './components/TopBar'

export function App() {
  useEffect(() => {
    document.title = 'Skybound — Travel Template'
  }, [])

  return (
    <div>
      <OffCanvasMenu />
      <TopBar />
      <main>
        <Hero />
        <PopularPlaces />
        <BestPlans />
        <Amenities />
        <PackageSearch />
        <Testimonials />
        <Newsletter />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
