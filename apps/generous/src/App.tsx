import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { HeroSlider } from './components/HeroSlider'
import { FeatureRow } from './components/FeatureRow'
import { FeaturedDonate } from './components/FeaturedDonate'
import { TopFundraisers } from './components/TopFundraisers'
import { LatestDonations } from './components/LatestDonations'
import { FeaturedSection } from './components/FeaturedSection'
import { LatestNews } from './components/LatestNews'
import { AboutUs } from './components/AboutUs'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Generous — Charity Template'
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSlider />
        <FeatureRow />
        <FeaturedDonate />
        <TopFundraisers />
        <LatestDonations />
        <FeaturedSection />
        <LatestNews />
        <AboutUs />
      </main>
      <Footer />
    </div>
  )
}
