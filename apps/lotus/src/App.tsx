import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Services } from './components/Services'
import { Classes } from './components/Classes'
import { Trainers } from './components/Trainers'
import { Testimonials } from './components/Testimonials'
import { Pricing } from './components/Pricing'
import { Schedule } from './components/Schedule'
import { Blog } from './components/Blog'
import { Instagram } from './components/Instagram'
import { Footer } from './components/Footer'

export function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Classes />
        <Trainers />
        <Testimonials />
        <Pricing />
        <Schedule />
        <Blog />
        <Instagram />
      </main>
      <Footer />
    </>
  )
}
