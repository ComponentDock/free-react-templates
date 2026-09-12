import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { SearchBar } from './components/SearchBar'
import { Services } from './components/Services'
import { Stats } from './components/Stats'
import { ParallaxCTA } from './components/ParallaxCTA'
import { TravelCards } from './components/TravelCards'
import { HotelCards } from './components/HotelCards'
import { RoomCards } from './components/RoomCards'
import { RestaurantCards } from './components/RestaurantCards'
import { BlogEntries } from './components/BlogEntries'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <Navbar />
      <main>
        <Hero />
        <SearchBar />
        <Services />
        <Stats />
        <ParallaxCTA
          heading="Choose the Perfect Destination"
          image="https://picsum.photos/seed/trekly-dest-cta/1600/600"
        />
        <TravelCards />
        <ParallaxCTA
          heading="Choose at $99 Per Night Only"
          image="https://picsum.photos/seed/trekly-hotel-cta/1600/600"
          href="#hotels"
        />
        <HotelCards />
        <RoomCards />
        <RestaurantCards />
        <BlogEntries />
      </main>
      <Footer />
    </div>
  )
}
