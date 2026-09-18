import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Categories } from './components/Categories'
import { Services } from './components/Services'
import { Locations } from './components/Locations'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen bg-page">
      <Navbar />
      <Hero />
      <Categories />
      <Services />
      <Locations />
      <Testimonials />
      <Blog />
      <Newsletter />
      <Footer />
    </div>
  )
}
