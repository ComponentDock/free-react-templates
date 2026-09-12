import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Categories } from './components/Categories'
import { About } from './components/About'
import { EditorsPick } from './components/EditorsPick'
import { FeaturedDestinations } from './components/FeaturedDestinations'
import { FeaturedRestaurants } from './components/FeaturedRestaurants'
import { FeaturedEvents } from './components/FeaturedEvents'
import { Clients } from './components/Clients'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen bg-white font-opensans">
      <Navbar />
      <Hero />
      <Categories />
      <About />
      <EditorsPick />
      <FeaturedDestinations />
      <FeaturedRestaurants />
      <FeaturedEvents />
      <Clients />
      <Footer />
    </div>
  )
}
