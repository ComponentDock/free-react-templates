import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { About } from './components/About'
import { Programs } from './components/Programs'
import { ClassTimetable } from './components/ClassTimetable'
import { Pricing } from './components/Pricing'
import { WhyChooseUs } from './components/WhyChooseUs'
import { VideoCta } from './components/VideoCta'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Sprintly — Fitness & Sport Template'
  }, [])

  return (
    <div className="min-h-screen bg-dark-900 font-sans text-dark-200">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <About />
        <Programs />
        <ClassTimetable />
        <Pricing />
        <WhyChooseUs />
        <VideoCta />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
