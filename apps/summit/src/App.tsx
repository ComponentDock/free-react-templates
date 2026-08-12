import { useEffect } from 'react'
import { Header } from './components/Header'
import { HeroSlider } from './components/HeroSlider'
import { AboutCountdown } from './components/AboutCountdown'
import { Speakers } from './components/Speakers'
import { Schedule } from './components/Schedule'
import { TicketPricing } from './components/TicketPricing'
import { Sponsors } from './components/Sponsors'
import { LatestNews } from './components/LatestNews'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

/* Summit — a conference & event landing page. Section order mirrors the
   source template 1:1: header → hero slider → about + countdown → speakers
   → schedule → ticket pricing → sponsors + testimonials → latest news →
   contact → footer. */

export function App() {
  useEffect(() => {
    document.title = 'Summit — Conference & Event'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-navy font-sans text-white">
      <Header />
      <main className="flex-1">
        <HeroSlider />
        <AboutCountdown />
        <Speakers />
        <Schedule />
        <TicketPricing />
        <Sponsors />
        <LatestNews />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
