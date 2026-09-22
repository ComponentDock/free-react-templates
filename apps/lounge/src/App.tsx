import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { ReservationForm } from './components/ReservationForm'
import { Services } from './components/Services'
import { RoomShowcase } from './components/RoomShowcase'
import { ParallaxConference } from './components/ParallaxConference'
import { RestaurantMenu } from './components/RestaurantMenu'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { Events } from './components/Events'
import { InstagramGallery } from './components/InstagramGallery'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <ReservationForm />
        <Services />
        <RoomShowcase />
        <ParallaxConference />
        <RestaurantMenu />
        <Testimonials />
        <Blog />
        <Events />
        <InstagramGallery />
      </main>
      <Footer />
    </div>
  )
}
