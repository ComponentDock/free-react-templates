import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Gallery } from './components/Gallery'
import { Testimonials } from './components/Testimonials'
import { Services } from './components/Services'
import { InstagramFeed } from './components/InstagramFeed'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen bg-white font-poppins">
      <Navbar />
      <Hero />
      <Gallery />
      <Testimonials />
      <Services />
      <InstagramFeed />
      <Footer />
    </div>
  )
}
