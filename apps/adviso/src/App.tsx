import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { HeroSlider } from './components/HeroSlider'
import { MissionStrip } from './components/MissionStrip'
import { Services } from './components/Services'
import { About } from './components/About'
import { Solutions } from './components/Solutions'
import { VideoCta } from './components/VideoCta'
import { CaseStudy } from './components/CaseStudy'
import { Stats } from './components/Stats'
import { Footer } from './components/Footer'
import { BackToTop } from './components/BackToTop'

export function App() {
  useEffect(() => {
    document.title = 'Adviso — Consulting Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-body">
      <Navbar />
      <main>
        <HeroSlider />
        <MissionStrip />
        <Services />
        <About />
        <Solutions />
        <VideoCta />
        <CaseStudy />
        <Stats />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
