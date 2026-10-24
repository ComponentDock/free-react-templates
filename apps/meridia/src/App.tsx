import { useEffect } from 'react'
import { TopBar } from './components/TopBar'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { AboutOverview } from './components/AboutOverview'
import { QualityBanner } from './components/QualityBanner'
import { ServicesGrid } from './components/ServicesGrid'
import { CaseStudies } from './components/CaseStudies'
import { Stats } from './components/Stats'
import { Team } from './components/Team'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { CTABanner } from './components/CTABanner'
import { Footer } from './components/Footer'

export default function App() {
  useEffect(() => {
    document.title = 'Unioncorp — Finance & Consultation Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink">
      <TopBar />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <AboutOverview />
        <QualityBanner />
        <ServicesGrid />
        <CaseStudies />
        <Stats />
        <Team />
        <Testimonials />
        <Blog />
        <CTABanner />
      </main>
      <Footer />
    </div>
  )
}
