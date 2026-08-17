import { About } from './components/About'
import { Blog } from './components/Blog'
import { Categories } from './components/Categories'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { HowItWorks } from './components/HowItWorks'
import { ListingSection } from './components/ListingSection'
import { Navbar } from './components/Navbar'
import { SpecialOffers } from './components/SpecialOffers'
import { Testimonials } from './components/Testimonials'
import { ourListings, popularListings } from './data'

/* Borough — city directory & listing one-pager. Section order mirrors the
   recreated source design 1:1: navbar over hero, category grid, popular
   listing, special offers band, our listing, about + counters,
   testimonials, how it works, recent blog, dark footer. */
export function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <ListingSection
          subheading="Our Listing"
          title="Popular Listing"
          listings={popularListings}
        />
        <SpecialOffers />
        <ListingSection subheading="Listing" title="Our Listing" listings={ourListings} />
        <About />
        <Testimonials />
        <HowItWorks />
        <Blog />
      </main>
      <Footer />
    </>
  )
}
