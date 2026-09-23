import { TopBar } from './components/TopBar'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { IntroCards } from './components/IntroCards'
import { TrustFeatures } from './components/TrustFeatures'
import { StatsCounter } from './components/StatsCounter'
import { PracticeAreas } from './components/PracticeAreas'
import { CaseStudies } from './components/CaseStudies'
import { Testimonials } from './components/Testimonials'
import { CtaBanner } from './components/CtaBanner'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-[#212529]">
      <TopBar />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <IntroCards />
        <TrustFeatures />
        <StatsCounter />
        <PracticeAreas />
        <CaseStudies />
        <Testimonials />
        <CtaBanner />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
