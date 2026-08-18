import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Properties } from './components/Properties'
import { About } from './components/About'
import { WhyChooseUs } from './components/WhyChooseUs'
import { Testimonials } from './components/Testimonials'
import { Agents } from './components/Agents'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="bg-white font-sans text-navy-ink antialiased">
      <Navbar />
      <main>
        <Hero />
        <Properties />
        <About />
        <WhyChooseUs />
        <Testimonials />
        <Agents />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
