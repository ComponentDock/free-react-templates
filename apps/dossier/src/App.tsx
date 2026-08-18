import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Expertise } from './components/Expertise'
import { ResumeSection } from './components/ResumeSection'
import { QuoteBand } from './components/QuoteBand'
import { InstagramStrip } from './components/InstagramStrip'
import { Footer } from './components/Footer'
import { educationRows, experienceRows } from './data'

export function App() {
  useEffect(() => {
    document.title = 'Dossier — Resume & Portfolio Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-ink">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Expertise />
        <ResumeSection title="Experience" rows={experienceRows} />
        <QuoteBand />
        <ResumeSection title="Education" rows={educationRows} />
        <InstagramStrip />
      </main>
      <Footer />
    </div>
  )
}
