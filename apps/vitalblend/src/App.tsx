import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { CtaBanner } from './components/CtaBanner'
import { Services } from './components/Services'
import { Testimonial } from './components/Testimonial'
import { VideoSection } from './components/VideoSection'
import { Blog } from './components/Blog'
import { Satisfaction } from './components/Satisfaction'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'VitalBlend — Health & Wellness Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-poppins text-brand-body">
      <Navbar />
      <main>
        <Hero />
        <About />
        <CtaBanner />
        <Services />
        <Testimonial />
        <VideoSection />
        <Blog />
        <Satisfaction />
      </main>
      <Footer />
    </div>
  )
}
