import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { FeatureStrip } from './components/FeatureStrip'
import { ServicesGrid } from './components/ServicesGrid'
import { StatsCounter } from './components/StatsCounter'
import { AboutSection } from './components/AboutSection'
import { CoverGoals } from './components/CoverGoals'
import { Testimonials } from './components/Testimonials'
import { Opportunities } from './components/Opportunities'
import { AboutCTA } from './components/AboutCTA'
import { BlogNews } from './components/BlogNews'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Silverleaf — Senior Care Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <FeatureStrip />
        <ServicesGrid />
        <StatsCounter />
        <AboutSection />
        <CoverGoals />
        <Testimonials />
        <Opportunities />
        <AboutCTA />
        <BlogNews />
      </main>
      <Footer />
    </div>
  )
}
