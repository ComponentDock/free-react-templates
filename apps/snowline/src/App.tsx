import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { NewArrivals } from './components/NewArrivals'
import { ShippingInfo } from './components/ShippingInfo'
import { InstagramFeed } from './components/InstagramFeed'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Snowline — Fashion E-Commerce Shop Landing Page'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-paper text-mist transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <NewArrivals />
        <ShippingInfo />
        <InstagramFeed />
      </main>
      <Footer />
    </div>
  )
}
