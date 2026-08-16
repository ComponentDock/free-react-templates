import { About } from './components/About'
import { Blog } from './components/Blog'
import { Bmi } from './components/Bmi'
import { Classes } from './components/Classes'
import { CounterBand } from './components/CounterBand'
import { CtaBand } from './components/CtaBand'
import { Features } from './components/Features'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Pricing } from './components/Pricing'
import { Schedules } from './components/Schedules'
import { Testimonials } from './components/Testimonials'
import { TopStrip } from './components/TopStrip'
import { Trainers } from './components/Trainers'
import { VideoBand } from './components/VideoBand'

/* Kinesis — crossfit workout training center landing page. Section
   order mirrors the recreated source design 1:1. */
export function App() {
  return (
    <main>
      <TopStrip />
      <Navbar />
      <Hero />
      <About />
      <CounterBand />
      <CtaBand />
      <Features />
      <Classes />
      <Pricing />
      <VideoBand />
      <Schedules />
      <Trainers />
      <Testimonials />
      <Blog />
      <Bmi />
      <Footer />
    </main>
  )
}
