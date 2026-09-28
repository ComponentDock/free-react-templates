import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { ReservationForm } from './components/ReservationForm'
import { AboutSection } from './components/AboutSection'
import { MenuSection } from './components/MenuSection'
import { SpecialtiesParallax } from './components/SpecialtiesParallax'
import { SpecialtiesGrid } from './components/SpecialtiesGrid'
import { TestimonialSection } from './components/TestimonialSection'
import { BlogSection } from './components/BlogSection'
import { InstagramGrid } from './components/InstagramGrid'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Bistrox — Restaurant Template'
  }, [])

  return (
    <div className="min-h-screen font-sans text-text-dark">
      <Navbar />
      <main>
        <Hero />
        <ReservationForm />
        <AboutSection />
        <MenuSection />
        <SpecialtiesParallax />
        <SpecialtiesGrid />
        <TestimonialSection />
        <BlogSection />
        <InstagramGrid />
      </main>
      <Footer />
    </div>
  )
}
