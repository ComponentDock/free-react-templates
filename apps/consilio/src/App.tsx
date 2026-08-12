import { useEffect } from 'react'
import { Header } from './components/Header'
import { HeroSlider } from './components/HeroSlider'
import { TopServices } from './components/TopServices'
import { CompanySupport } from './components/CompanySupport'
import { VideoIntro } from './components/VideoIntro'
import { FeaturedCases } from './components/FeaturedCases'
import { CaseStudies } from './components/CaseStudies'
import { CtaBanner } from './components/CtaBanner'
import { Testimonials } from './components/Testimonials'
import { Counters } from './components/Counters'
import { Team } from './components/Team'
import { Pricing } from './components/Pricing'
import { Faq } from './components/Faq'
import { WantToWork } from './components/WantToWork'
import { Blog } from './components/Blog'
import { Brands } from './components/Brands'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Consilio — Business Consulting Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-body transition-colors dark:bg-gray-950">
      <Header />
      <main className="flex-1">
        <HeroSlider />
        <TopServices />
        <CompanySupport />
        <VideoIntro />
        <FeaturedCases />
        <CaseStudies />
        <CtaBanner />
        <Testimonials />
        <Counters />
        <Team />
        <Pricing />
        <Faq />
        <WantToWork />
        <Blog />
        <Brands />
      </main>
      <Footer />
    </div>
  )
}
