import { useEffect } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { UpcomingCause } from './components/UpcomingCause'
import { About } from './components/About'
import { Services } from './components/Services'
import { HelpSlider } from './components/HelpSlider'
import { Volunteers } from './components/Volunteers'
import { VolunteerCta } from './components/VolunteerCta'
import { Footer } from './components/Footer'

/** Mission — one-page nonprofit/charity template.
 *  Section order matches the live preview DOM 1:1: transparent header →
 *  full-height photo hero → Upcoming Cause panel (overlapping) → About →
 *  Services → Help slider → Volunteers → Become a Volunteer CTA band →
 *  footer. */
export function App() {
  useEffect(() => {
    document.title = 'Mission — Nonprofit Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-ink">
      <Header />
      <main>
        <Hero />
        <UpcomingCause />
        <About />
        <Services />
        <HelpSlider />
        <Volunteers />
        <VolunteerCta />
      </main>
      <Footer />
    </div>
  )
}
