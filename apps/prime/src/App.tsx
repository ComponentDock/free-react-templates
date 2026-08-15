import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { GradientStrip } from './components/GradientStrip'
import { Services } from './components/Services'
import { Counters } from './components/Counters'
import { Portfolio } from './components/Portfolio'
import { Pricing } from './components/Pricing'
import { QuoteForm } from './components/QuoteForm'
import { Testimonials } from './components/Testimonials'
import { Newsletter } from './components/Newsletter'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-ink antialiased">
      <Navbar />
      <main>
        <div data-section="hero">
          <Hero />
        </div>
        <div data-section="gradient-strip">
          <GradientStrip />
        </div>
        <div data-section="services">
          <Services />
        </div>
        <div data-section="counters">
          <Counters />
        </div>
        <div data-section="portfolio">
          <Portfolio />
        </div>
        <div data-section="pricing">
          <Pricing />
        </div>
        <div data-section="quote">
          <QuoteForm />
        </div>
        <div data-section="testimonials">
          <Testimonials />
        </div>
        <div data-section="newsletter">
          <Newsletter />
        </div>
        <div data-section="blog">
          <Blog />
        </div>
      </main>
      <Footer />
    </div>
  )
}
