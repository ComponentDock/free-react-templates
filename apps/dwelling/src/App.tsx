import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { SearchBar } from './components/SearchBar'
import { LatestProperties } from './components/LatestProperties'
import { WhyChooseUs } from './components/WhyChooseUs'
import { FeaturedProperties } from './components/FeaturedProperties'
import { TeamAgents } from './components/TeamAgents'
import { Categories } from './components/Categories'
import { Testimonials } from './components/Testimonials'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

/** Dwelling — one-page real-estate landing.
 *  Section order matches the live preview DOM 1:1:
 *  navbar → hero → search → latest properties → why choose us →
 *  featured properties → team → categories → testimonials → contact → footer. */
export function App() {
  return (
    <div className="min-h-screen bg-white font-body text-text-dark">
      <Navbar />
      <main>
        <Hero />
        <SearchBar />
        <LatestProperties />
        <WhyChooseUs />
        <FeaturedProperties />
        <TeamAgents />
        <Categories />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
