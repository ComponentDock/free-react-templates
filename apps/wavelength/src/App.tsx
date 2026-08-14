import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { ShowCards } from './components/ShowCards'
import { WeeklyProgram } from './components/WeeklyProgram'
import { Testimonials } from './components/Testimonials'
import { Subscribe } from './components/Subscribe'
import { DjGrid } from './components/DjGrid'
import { NewsSection } from './components/NewsSection'
import { SocialBand } from './components/SocialBand'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Wavelength — Radio Station'
  }, [])

  return (
    <div className="relative min-h-screen bg-white font-sans text-body">
      <Navbar />
      <main>
        <Hero />
        <ShowCards />
        <WeeklyProgram />
        <Testimonials />
        <Subscribe />
        <DjGrid />
        <NewsSection />
        <SocialBand />
      </main>
      <Footer />
    </div>
  )
}
