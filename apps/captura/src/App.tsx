import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { PhotographySkills } from './components/PhotographySkills'
import { WildlifePhoto } from './components/WildlifePhoto'
import { Gallery } from './components/Gallery'
import { Testimonials } from './components/Testimonials'
import { Team } from './components/Team'
import { ContactInfo } from './components/ContactInfo'
import { InstagramFeed } from './components/InstagramFeed'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Captura — Photography Portfolio Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-heading">
      <Navbar />
      <main>
        <Hero />
        <PhotographySkills />
        <WildlifePhoto />
        <Gallery />
        <Testimonials />
        <Team />
        <ContactInfo />
        <InstagramFeed />
      </main>
      <Footer />
    </div>
  )
}
