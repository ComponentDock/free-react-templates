import { Navbar } from './components/Navbar'
import { HeroSlider } from './components/HeroSlider'
import { FreeConsulting } from './components/FreeConsulting'
import { IntroBand } from './components/IntroBand'
import { About } from './components/About'
import { CaseStudies } from './components/CaseStudies'
import { WhyChooseUs } from './components/WhyChooseUs'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

/** Parley — one-page consulting-agency landing.
 *  Section order matches the live preview DOM 1:1:
 *  top bar + navbar → hero slider → free consulting → intro band → about +
 *  counters → case studies → why choose us → intro band → testimonials →
 *  blog → footer. */
export function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-ink">
      <Navbar />
      <main>
        <HeroSlider />
        <FreeConsulting />
        <IntroBand />
        <About />
        <CaseStudies />
        <WhyChooseUs />
        <IntroBand />
        <Testimonials />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
