import { useEffect } from 'react'
import { DotNav } from './components/DotNav'
import { Hero } from './components/Hero'
import { AboutSection } from './components/AboutSection'
import { ServicesSection } from './components/ServicesSection'
import { GallerySection } from './components/GallerySection'
import { TestimonialsSection } from './components/TestimonialsSection'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'

/* Focus — dark, cinematic photography & film studio landing page:
   fixed dot navigation → hero → about (animated counter) → services
   (cards + progress bars) → project gallery (lightbox) → testimonial
   carousel → contact (info boxes + form) → footer. */
export function App() {
  useEffect(() => {
    document.title = 'Focus — Photography Studio'
  }, [])

  return (
    <div className="min-h-screen bg-ink font-sans text-white">
      <DotNav />
      <main>
        <Hero />
        <AboutSection />
        <ServicesSection />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
