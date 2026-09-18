import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { HeroBanner } from './components/HeroBanner'
import { AboutSection } from './components/AboutSection'
import { FeaturedFood } from './components/FeaturedFood'
import { OfferBanner } from './components/OfferBanner'
import { FoodMenu } from './components/FoodMenu'
import { CtaBanner } from './components/CtaBanner'
import { ChefSection } from './components/ChefSection'
import { ReservationForm } from './components/ReservationForm'
import { BlogSection } from './components/BlogSection'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Crave — Restaurant Landing'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <Navbar />
      <main>
        <HeroBanner />
        <AboutSection />
        <FeaturedFood />
        <OfferBanner />
        <FoodMenu />
        <CtaBanner />
        <ChefSection />
        <ReservationForm />
        <BlogSection />
      </main>
      <Footer />
    </div>
  )
}
