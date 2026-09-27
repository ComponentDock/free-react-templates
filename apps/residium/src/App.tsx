import { Navbar } from './components/Navbar'
import { HeroSlider } from './components/HeroSlider'
import { About } from './components/About'
import { Facilities } from './components/Facilities'
import { Certificates } from './components/Certificates'
import { Apartments } from './components/Apartments'
import { Testimonials } from './components/Testimonials'
import { CTA } from './components/CTA'
import { LatestNews } from './components/LatestNews'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen bg-[#f9f9ff] font-sans text-gray-800">
      <Navbar />
      <main>
        <HeroSlider />
        <About />
        <Facilities />
        <Certificates />
        <Apartments />
        <Testimonials />
        <CTA />
        <LatestNews />
      </main>
      <Footer />
    </div>
  )
}
