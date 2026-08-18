import { useEffect } from 'react'
import { Agents } from './components/Agents'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { HeroSlider } from './components/HeroSlider'
import { Newsletter } from './components/Newsletter'
import { PropertyCarousel } from './components/PropertyCarousel'
import { PropertyTypes } from './components/PropertyTypes'
import { Services } from './components/Services'
import { FEATURED_PROPERTIES, FOR_SALE_PROPERTIES } from './data'

export function App() {
  useEffect(() => {
    document.title = 'Landmark — Real Estate Template'
  }, [])

  return (
    <main>
      <Header />
      <HeroSlider />
      <PropertyCarousel
        id="properties"
        title="Display Latest & Featured Properties"
        subtitle="Hand-picked homes and offices ready for you to move in."
        properties={FEATURED_PROPERTIES}
        previousLabel="Previous featured properties"
        nextLabel="Next featured properties"
      />
      <Services />
      <PropertyCarousel
        id="for-sale"
        title="Properties for Sale"
        subtitle="Fresh listings added this week from trusted owners."
        properties={FOR_SALE_PROPERTIES}
        previousLabel="Previous properties for sale"
        nextLabel="Next properties for sale"
      />
      <PropertyTypes />
      <Agents />
      <Newsletter />
      <Footer />
    </main>
  )
}
