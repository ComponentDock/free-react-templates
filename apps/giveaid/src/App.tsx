import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { TopBar } from './components/TopBar'
import { Hero } from './components/Hero'
import { AboutSection } from './components/AboutSection'
import { StepsAccordion } from './components/StepsAccordion'
import { WaitingChildren } from './components/WaitingChildren'
import { FeaturedStories } from './components/FeaturedStories'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'GiveAid — Charity & Adoption Template'
  }, [])

  return (
    <div className="font-sans">
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <StepsAccordion />
        <WaitingChildren />
        <FeaturedStories />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
