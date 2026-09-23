import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { HeroSlider } from './components/HeroSlider'
import { StatsCounter } from './components/StatsCounter'
import { ServicesGrid } from './components/ServicesGrid'
import { CtaBanner } from './components/CtaBanner'
import { Testimonials } from './components/Testimonials'
import { ContactForm } from './components/ContactForm'
import { BlogPosts } from './components/BlogPosts'
import { AttorneyTeam } from './components/AttorneyTeam'
import { IntroBanner } from './components/IntroBanner'
import { Footer } from './components/Footer'

/**
 * Courtcraft — single-page law firm template. Section order:
 * Navbar → Hero slider → Stats counter → Services grid → CTA banner →
 * Testimonials → Contact form → Blog posts → Attorney team →
 * Intro banner → Footer.
 */
export function App() {
  useEffect(() => {
    document.title = 'Courtcraft — Law Firm Template'
  }, [])

  return (
    <div className="font-body text-black">
      <Navbar />
      <main>
        <HeroSlider />
        <StatsCounter />
        <ServicesGrid />
        <CtaBanner />
        <Testimonials />
        <ContactForm />
        <BlogPosts />
        <AttorneyTeam />
        <IntroBanner />
      </main>
      <Footer />
    </div>
  )
}
