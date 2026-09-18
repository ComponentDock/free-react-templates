import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { SearchTabs } from './components/SearchTabs'
import { FeaturesIntro } from './components/FeaturesIntro'
import { FeaturedDestinations } from './components/FeaturedDestinations'
import { Services } from './components/Services'
import { PopularDestinations } from './components/PopularDestinations'
import { Counter } from './components/Counter'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Trailquest — Travel Agency Template'
  }, [])

  return (
    <div className="min-h-screen bg-white text-text-primary">
      <Navbar />
      <main>
        <Hero />
        <SearchTabs />
        <FeaturesIntro />
        <FeaturedDestinations />
        <Services />
        <PopularDestinations />
        <Counter />
        <Testimonials />
        <Blog />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
