import { useEffect } from 'react'
import { BlogSection } from './components/BlogSection'
import { CtaNewsletter } from './components/CtaNewsletter'
import { Feature } from './components/Feature'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { PlaceDetails } from './components/PlaceDetails'
import { PopularPlace } from './components/PopularPlace'
import { SearchSection } from './components/SearchSection'
import { TourPackage } from './components/TourPackage'
import { siteName, skipLabel } from './data'

export function App() {
  useEffect(() => {
    document.title = `${siteName} — Travel Template`
  }, [])

  return (
    <div className="min-h-screen bg-paper font-sans text-ink">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-ink focus:px-4 focus:py-2 focus:text-white"
      >
        {skipLabel}
      </a>
      <Header />
      <main id="main">
        <Hero />
        <SearchSection />
        <Feature />
        <PopularPlace />
        <PlaceDetails />
        <TourPackage />
        <CtaNewsletter />
        <BlogSection />
      </main>
      <Footer />
    </div>
  )
}
