import { useEffect } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Services } from './components/Services'
import { Testimonials } from './components/Testimonials'
import { Gallery } from './components/Gallery'
import { Team } from './components/Team'
import { MembershipBanner } from './components/MembershipBanner'
import { Schedule } from './components/Schedule'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'FitCore — Health & Fitness Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Gallery />
        <Team />
        <MembershipBanner />
        <Schedule />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
