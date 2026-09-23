import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { HeroSlider } from './components/HeroSlider'
import { ServicesStrip } from './components/ServicesStrip'
import { PortfolioGallery } from './components/PortfolioGallery'
import { SkillsSection } from './components/SkillsSection'
import { Testimonials } from './components/Testimonials'
import { InstagramGrid } from './components/InstagramGrid'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Plano — Interior Design Landing'
  }, [])

  return (
    <div className="min-h-screen bg-white font-['Poppins',sans-serif]">
      <Navbar />
      <main>
        <HeroSlider />
        <ServicesStrip />
        <PortfolioGallery />
        <SkillsSection />
        <Testimonials />
        <InstagramGrid />
      </main>
      <Footer />
    </div>
  )
}
