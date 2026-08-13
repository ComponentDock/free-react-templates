import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { ClassTypes } from './components/ClassTypes'
import { Experience } from './components/Experience'
import { Classes } from './components/Classes'
import { Timetable } from './components/Timetable'
import { Testimonials } from './components/Testimonials'
import { StatsBand } from './components/StatsBand'
import { Posts } from './components/Posts'
import { Gallery } from './components/Gallery'
import { Footer } from './components/Footer'

/* Zendo — yoga & meditation studio one-pager.
   Section order matches the reference preview 1:1: transparent navbar →
   full-height hero slider (2 slides) → class types strip (4 circular
   cards) → Experience of Yoga split (8 icon items + center image) → Our
   Classes (6 cards) → Class Time Table (7-day) → Successful Stories (5
   testimonials) → stats band (4 count-up counters) → Recent Posts (3
   cards) → gallery (8 tiles) → light footer with contact form. */
export function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <main>
        <Hero />
        <ClassTypes />
        <Experience />
        <Classes />
        <Timetable />
        <Testimonials />
        <StatsBand />
        <Posts />
        <Gallery />
      </main>
      <Footer />
    </div>
  )
}
