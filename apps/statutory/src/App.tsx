import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { IntroStrip } from './components/IntroStrip'
import { About } from './components/About'
import { CounterStats } from './components/CounterStats'
import { PracticeAreas } from './components/PracticeAreas'
import { CaseStudies } from './components/CaseStudies'
import { Testimonials } from './components/Testimonials'
import { Appointment } from './components/Appointment'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <Navbar />
      <Hero />
      <IntroStrip />
      <About />
      <CounterStats />
      <PracticeAreas />
      <CaseStudies />
      <Testimonials />
      <Appointment />
      <Footer />
    </div>
  )
}
