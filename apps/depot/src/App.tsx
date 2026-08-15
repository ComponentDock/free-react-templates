import { About } from './components/About'
import { Agents } from './components/Agents'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { HowItWorks } from './components/HowItWorks'
import { Navbar } from './components/Navbar'
import { News } from './components/News'
import { Properties } from './components/Properties'
import { Services } from './components/Services'
import { Testimonials } from './components/Testimonials'

export function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-body antialiased">
      <header>
        <Navbar />
        <Hero />
      </header>
      <main>
        <div data-section="properties">
          <Properties />
        </div>
        <div data-section="agents">
          <Agents />
        </div>
        <div data-section="how-it-works">
          <HowItWorks />
        </div>
        <div data-section="about">
          <About />
        </div>
        <div data-section="services">
          <Services />
        </div>
        <div data-section="testimonials">
          <Testimonials />
        </div>
        <div data-section="news">
          <News />
        </div>
        <div data-section="contact">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  )
}
