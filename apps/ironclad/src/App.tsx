import { TopBar } from './components/TopBar'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { FeaturesStrip } from './components/FeaturesStrip'
import { AboutSection } from './components/AboutSection'
import { CtaBar } from './components/CtaBar'
import { ServicesSection } from './components/ServicesSection'
import { StatsSection } from './components/StatsSection'
import { ProjectsSection } from './components/ProjectsSection'
import { Testimonials } from './components/Testimonials'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <FeaturesStrip />
        <AboutSection />
        <CtaBar />
        <ServicesSection />
        <StatsSection />
        <ProjectsSection />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}
