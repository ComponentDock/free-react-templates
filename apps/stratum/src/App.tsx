import { useEffect } from 'react'
import { TopBar } from './components/TopBar'
import { Navbar } from './components/Navbar'
import { HeroSlider } from './components/HeroSlider'
import { Services } from './components/Services'
import { FeaturesGrid } from './components/FeaturesGrid'
import { AboutVideo } from './components/AboutVideo'
import { Team } from './components/Team'
import { Pricing } from './components/Pricing'
import { FAQ } from './components/FAQ'
import { Press } from './components/Press'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

/* Stratum — a mining/industrial company landing page. Section order mirrors the
   source template 1:1: top-bar → navbar → hero slider → services → features grid
   → about/video → team → pricing → FAQ → press → testimonials → blog → contact → footer. */

export function App() {
  useEffect(() => {
    document.title = 'Stratum — Mining & Industrial'
  }, [])

  return (
    <div className="flex min-h-screen flex-col font-sans text-[#939393]">
      <TopBar />
      <Navbar />
      <main className="flex-1">
        <HeroSlider />
        <Services />
        <FeaturesGrid />
        <AboutVideo />
        <Team />
        <Pricing />
        <FAQ />
        <Press />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
