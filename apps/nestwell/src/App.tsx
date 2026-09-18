import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { SearchForm } from './components/SearchForm'
import { FeaturedProperties } from './components/FeaturedProperties'
import { About } from './components/About'
import { Services } from './components/Services'
import { Testimonials } from './components/Testimonials'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen bg-white font-poppins">
      <Navbar />
      <Hero />
      <SearchForm />
      <FeaturedProperties />
      <About />
      <Services />
      <Testimonials />
      <Footer />
    </div>
  )
}
