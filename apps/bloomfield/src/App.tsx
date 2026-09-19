import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Benefits } from './components/Benefits'
import { Categories } from './components/Categories'
import { About } from './components/About'
import { NewArrivals } from './components/NewArrivals'
import { CallToAction } from './components/CallToAction'
import { Blog } from './components/Blog'
import { Testimonials } from './components/Testimonials'
import { InstagramFeed } from './components/InstagramFeed'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <Categories />
        <About />
        <NewArrivals />
        <CallToAction />
        <Blog />
        <Testimonials />
        <InstagramFeed />
      </main>
      <Footer />
    </div>
  )
}
