import { useEffect } from 'react'
import { TopBar } from './components/TopBar'
import { Navbar } from './components/Navbar'
import { Banner } from './components/Banner'
import { BookingSection } from './components/BookingSection'
import { TopPlaces } from './components/TopPlaces'
import { FeaturedEvent } from './components/FeaturedEvent'
import { HotelList } from './components/HotelList'
import { ClientReviews } from './components/ClientReviews'
import { BestServices } from './components/BestServices'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Wanderly — Travel Agency Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900 transition-colors dark:bg-gray-950 dark:text-gray-100">
      <TopBar />
      <Navbar />
      <main className="flex-1">
        <Banner />
        <BookingSection />
        <TopPlaces />
        <FeaturedEvent />
        <HotelList />
        <ClientReviews />
        <BestServices />
      </main>
      <Footer />
    </div>
  )
}
