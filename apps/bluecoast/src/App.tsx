import { Header } from './components/Header'
import { HeroSlider } from './components/HeroSlider'
import { SearchBar } from './components/SearchBar'
import { RecentProperties } from './components/RecentProperties'
import { CitiesGrid } from './components/CitiesGrid'
import { Testimonials } from './components/Testimonials'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen bg-white font-body text-text-dark">
      <Header />
      <main>
        <HeroSlider />
        <SearchBar />
        <RecentProperties />
        <CitiesGrid />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
