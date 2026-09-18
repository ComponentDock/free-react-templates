import { useEffect } from 'react'
import { TopBar } from './components/TopBar'
import { Navbar } from './components/Navbar'
import { HeroSlider } from './components/HeroSlider'
import { QuoteAndAbout } from './components/QuoteAndAbout'
import { Services } from './components/Services'
import { CtaBanner } from './components/CtaBanner'
import { TeamMembers } from './components/TeamMembers'
import { ProjectGallery } from './components/ProjectGallery'
import { CounterStats } from './components/CounterStats'
import { ServicesAndTestimonials } from './components/ServicesAndTestimonials'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Nectar — Construction Company Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-paper text-body">
      <TopBar />
      <Navbar />
      <main className="flex-1">
        <HeroSlider />
        <QuoteAndAbout />
        <Services />
        <CtaBanner />
        <TeamMembers />
        <ProjectGallery />
        <CounterStats />
        <ServicesAndTestimonials />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
