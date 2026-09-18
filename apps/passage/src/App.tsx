import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { HeroBanner } from './components/HeroBanner'
import { CallToTop } from './components/CallToTop'
import { ServiceCards } from './components/ServiceCards'
import { BookingForm } from './components/BookingForm'
import { Features } from './components/Features'
import { Testimonials } from './components/Testimonials'
import { BrandLogos } from './components/BrandLogos'
import { BlogPosts } from './components/BlogPosts'
import { CtaBottom } from './components/CtaBottom'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Passage — Immigration Services'
  }, [])

  return (
    <div className="min-h-screen bg-paper font-body text-text">
      <Navbar />
      <main>
        <HeroBanner />
        <CallToTop />
        <ServiceCards />
        <BookingForm />
        <Features />
        <Testimonials />
        <BrandLogos />
        <BlogPosts />
        <CtaBottom />
      </main>
      <Footer />
    </div>
  )
}
