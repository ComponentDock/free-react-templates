import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { LegalPractice } from './components/LegalPractice'
import { About } from './components/About'
import { ConsultationForm } from './components/ConsultationForm'
import { CaseStudies } from './components/CaseStudies'
import { Testimonials } from './components/Testimonials'
import { Team } from './components/Team'
import { CtaBanner } from './components/CtaBanner'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-ink">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <LegalPractice />
        <About />
        <ConsultationForm />
        <CaseStudies />
        <Testimonials />
        <Team />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  )
}
