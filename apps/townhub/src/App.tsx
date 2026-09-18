import { Blog } from './components/Blog'
import { Categories } from './components/Categories'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { HowItWorks } from './components/HowItWorks'
import { Navbar } from './components/Navbar'
import { PopularLocations } from './components/PopularLocations'
import { Subscribe } from './components/Subscribe'
import { Testimonial } from './components/Testimonial'

/* TownHub — city directory & listing one-pager. Section order mirrors the
   recreated ColorLib CityListing design 1:1: transparent navbar over hero
   with search bar, popular locations, how-it-works dark band, featured
   categories, testimonials, newsletter subscribe, blog posts, dark footer. */
export function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PopularLocations />
        <HowItWorks />
        <Categories />
        <Testimonial />
        <Subscribe />
        <Blog />
      </main>
      <Footer />
    </>
  )
}
