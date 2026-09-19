import { useEffect } from 'react'
import { Header } from './components/Header'
import { HeroSlider } from './components/HeroSlider'
import { PromoSection } from './components/PromoSection'
import { NewArrivals } from './components/NewArrivals'
import { ExtraPromos } from './components/ExtraPromos'
import { Gallery } from './components/Gallery'
import { Testimonials } from './components/Testimonials'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Vow — Fashion Shop Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-heading transition-colors">
      <Header />
      <main>
        <HeroSlider />
        <PromoSection />
        <NewArrivals />
        <ExtraPromos />
        <Gallery />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
