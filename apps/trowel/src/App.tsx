import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { AboutSection } from './components/AboutSection'
import { ServicesSection } from './components/ServicesSection'
import { ProjectSection } from './components/ProjectSection'
import { StatsSection } from './components/StatsSection'
import { Testimonials } from './components/Testimonials'
import { BlogSection } from './components/BlogSection'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <ServicesSection />
        <ProjectSection />
        <StatsSection />
        <Testimonials />
        <BlogSection />
      </main>
      <Footer />
    </div>
  )
}
