import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { AboutSection } from './components/AboutSection'
import { TeamSection } from './components/TeamSection'
import { PortfolioSection } from './components/PortfolioSection'
import { ServicesSection } from './components/ServicesSection'
import { Testimonials } from './components/Testimonials'
import { PricingSection } from './components/PricingSection'
import { FaqSection } from './components/FaqSection'
import { FeatureSplit } from './components/FeatureSplit'
import { BlogSection } from './components/BlogSection'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Unison — Creative One Page Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-ink antialiased">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <AboutSection />
        <TeamSection />
        <PortfolioSection />
        <ServicesSection />
        <Testimonials />
        <PricingSection />
        <FaqSection />
        <FeatureSplit />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
