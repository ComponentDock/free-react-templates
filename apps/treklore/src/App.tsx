import { useEffect } from 'react'
import { Header } from './components/Header'
import { HeroSlider } from './components/HeroSlider'
import { SearchForm } from './components/SearchForm'
import { IntroFeatures } from './components/IntroFeatures'
import { PopularDestinations } from './components/PopularDestinations'
import { WhyChooseUs } from './components/WhyChooseUs'
import { FeaturedTours } from './components/FeaturedTours'
import { Testimonials } from './components/Testimonials'
import { InstagramFeed } from './components/InstagramFeed'
import { LatestNews } from './components/LatestNews'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Treklore — Travel & Tourism Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Header />
      <main>
        <HeroSlider />
        <SearchForm />
        <IntroFeatures />
        <PopularDestinations />
        <WhyChooseUs />
        <FeaturedTours />
        <Testimonials />
        <InstagramFeed />
        <LatestNews />
      </main>
      <Footer />
    </div>
  )
}
