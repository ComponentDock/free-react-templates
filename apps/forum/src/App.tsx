import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { VideoAbout } from './components/VideoAbout'
import { DarkAbout } from './components/DarkAbout'
import { VideoSection } from './components/VideoSection'
import { Speakers } from './components/Speakers'
import { Schedule } from './components/Schedule'
import { Pricing } from './components/Pricing'
import { BrandLogos } from './components/BrandLogos'
import { CTA } from './components/CTA'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <Hero />
      <VideoAbout />
      <DarkAbout />
      <VideoSection />
      <Speakers />
      <Schedule />
      <Pricing />
      <BrandLogos />
      <CTA />
      <Footer />
    </div>
  )
}
