import { TopBar } from './components/TopBar'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { CounterStats } from './components/CounterStats'
import { Schedule } from './components/Schedule'
import { Speakers } from './components/Speakers'
import { Gallery } from './components/Gallery'
import { Testimonials } from './components/Testimonials'
import { Pricing } from './components/Pricing'
import { Blog } from './components/Blog'
import { CTA } from './components/CTA'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen font-sans">
      <TopBar />
      <Navbar />
      <Hero />
      <About />
      <CounterStats />
      <Schedule />
      <Speakers />
      <Gallery />
      <Testimonials />
      <Pricing />
      <Blog />
      <CTA />
      <Footer />
    </div>
  )
}
