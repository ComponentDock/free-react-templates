import { useEffect } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Services } from './components/Services'
import { ChooseUs } from './components/ChooseUs'
import { Testimonials } from './components/Testimonials'
import { Team } from './components/Team'
import { WorkSteps } from './components/WorkSteps'
import { Blog } from './components/Blog'
import { CallToAction } from './components/CallToAction'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Spotless — Cleaning Services Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-body">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <ChooseUs />
        <Testimonials />
        <Team />
        <WorkSteps />
        <Blog />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}
