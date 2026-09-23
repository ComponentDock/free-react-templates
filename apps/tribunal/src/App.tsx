import { useEffect } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { StatsCounter } from './components/StatsCounter'
import { About } from './components/About'
import { PracticeAreas } from './components/PracticeAreas'
import { Testimonials } from './components/Testimonials'
import { Team } from './components/Team'
import { ContactForm } from './components/ContactForm'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Tribunal — Law Firm'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-text-body">
      <Header />
      <main>
        <Hero />
        <StatsCounter />
        <About />
        <PracticeAreas />
        <Testimonials />
        <Team />
        <ContactForm />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
