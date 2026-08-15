import { useEffect } from 'react'
import { TopBar } from './components/TopBar'
import { Navbar } from './components/Navbar'
import { HeroSlider } from './components/HeroSlider'
import { WelcomeIntro } from './components/WelcomeIntro'
import { Features } from './components/Features'
import { StatsBand } from './components/StatsBand'
import { Destinations } from './components/Destinations'
import { BookingForm } from './components/BookingForm'
import { Team } from './components/Team'
import { Testimonials } from './components/Testimonials'
import { ContactCta } from './components/ContactCta'
import { CtaBanner } from './components/CtaBanner'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Marina — Yacht Charter Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white font-body text-ink antialiased">
      <TopBar />
      <Navbar />
      <main className="flex-1">
        <HeroSlider />
        <WelcomeIntro />
        <Features />
        <StatsBand />
        <Destinations />
        <BookingForm />
        <Team />
        <Testimonials />
        <ContactCta />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  )
}
