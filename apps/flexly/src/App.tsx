import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { HeroSlider } from './components/HeroSlider'
import { ServicesBand } from './components/ServicesBand'
import { ProgramsSection } from './components/ProgramsSection'
import { ServicesSection } from './components/ServicesSection'
import { ScheduleSection } from './components/ScheduleSection'
import { AboutSection } from './components/AboutSection'
import { TestimonialsSection } from './components/TestimonialsSection'
import { CoachesSection } from './components/CoachesSection'
import { BlogSection } from './components/BlogSection'
import { ContactSection } from './components/ContactSection'
import { GallerySection } from './components/GallerySection'
import { Footer } from './components/Footer'

/* Flexly — single-page fitness & gym landing: navbar → hero slider →
   salmon band → programs tabs → services cards → schedule tabs →
   about counter → testimonials → coaches → blog → contact form →
   gallery → black footer. */
export function App() {
  useEffect(() => {
    document.title = 'Flexly — Fitness & Gym'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-black">
      <Navbar />
      <main>
        <HeroSlider />
        <ServicesBand />
        <ProgramsSection />
        <ServicesSection />
        <ScheduleSection />
        <AboutSection />
        <TestimonialsSection />
        <CoachesSection />
        <BlogSection />
        <ContactSection />
        <GallerySection />
      </main>
      <Footer />
    </div>
  )
}
