import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { ConsultationForm } from './components/ConsultationForm'
import { Services } from './components/Services'
import { Counter } from './components/Counter'
import { PracticeAreas } from './components/PracticeAreas'
import { Testimonials } from './components/Testimonials'
import { ContactCta } from './components/ContactCta'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Alibi — Lawyer Landing Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-ink">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ConsultationForm />
        <Services />
        <Counter />
        <PracticeAreas />
        <Testimonials />
        <ContactCta />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
