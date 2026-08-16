import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Countdown } from './components/Countdown'
import { Services } from './components/Services'
import { Pricing } from './components/Pricing'
import { MoreFeatures } from './components/MoreFeatures'
import { Testimonials } from './components/Testimonials'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'

export function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Countdown />
        <Services />
        <Pricing />
        <MoreFeatures />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
