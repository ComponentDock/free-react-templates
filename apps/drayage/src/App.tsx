import { useEffect } from 'react'
import { ChooseUs } from './components/ChooseUs'
import { Counters } from './components/Counters'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { LatestNews } from './components/LatestNews'
import { Projects } from './components/Projects'
import { Services } from './components/Services'
import { TestimonialSection } from './components/TestimonialSection'
import { Topbar } from './components/Topbar'

export function App() {
  useEffect(() => {
    document.title = 'Drayage — Freight Broker & Courier Services'
  }, [])

  return (
    <div id="top" className="font-body text-body">
      <Topbar />
      <Header />
      <main>
        <Hero />
        <Services />
        <Counters />
        <ChooseUs />
        <Projects />
        <TestimonialSection />
        <LatestNews />
      </main>
      <Footer />
    </div>
  )
}
