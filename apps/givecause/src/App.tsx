import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Services } from './components/Services'
import { Causes } from './components/Causes'
import { FeaturedEvents } from './components/FeaturedEvents'
import { Countdown } from './components/Countdown'
import { Team } from './components/Team'
import { Testimonials } from './components/Testimonials'
import { CTABanner } from './components/CTABanner'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

const nextEventDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)

export function App() {
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Causes />
        <FeaturedEvents />
        <Countdown targetDate={nextEventDate} />
        <Team />
        <Testimonials />
        <CTABanner />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
