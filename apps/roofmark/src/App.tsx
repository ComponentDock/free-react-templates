import { Navbar } from './components/Navbar'
import { HeroSlider } from './components/HeroSlider'
import { SearchBar } from './components/SearchBar'
import { FeaturedProperties } from './components/FeaturedProperties'
import { HotDeal } from './components/HotDeal'
import { Testimonials } from './components/Testimonials'
import { Footer } from './components/Footer'
import { FooterBar } from './components/FooterBar'

export function App() {
  return (
    <div className="min-h-screen font-sans text-brand-body">
      <Navbar />
      <main>
        <HeroSlider />
        <SearchBar />
        <FeaturedProperties />
        <HotDeal />
        <Testimonials />
      </main>
      <Footer />
      <FooterBar />
    </div>
  )
}
