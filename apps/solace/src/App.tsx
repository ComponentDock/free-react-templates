import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { BookingBar } from './components/BookingBar'
import { About } from './components/About'
import { Services } from './components/Services'
import { PromoBanner } from './components/PromoBanner'
import { FeaturedRooms } from './components/FeaturedRooms'
import { VideoTour } from './components/VideoTour'
import { RestaurantBar } from './components/RestaurantBar'
import { Testimonials } from './components/Testimonials'
import { Stats } from './components/Stats'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <BookingBar />
      <About />
      <Services />
      <PromoBanner />
      <FeaturedRooms />
      <VideoTour />
      <RestaurantBar />
      <Testimonials />
      <Stats />
      <Blog />
      <Footer />
    </div>
  )
}
