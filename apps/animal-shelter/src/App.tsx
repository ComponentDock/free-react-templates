import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { PetStrip } from './components/PetStrip'
import { SelectPet } from './components/SelectPet'
import { About } from './components/About'
import { Video } from './components/Video'
import { Process } from './components/Process'
import { Testimonials } from './components/Testimonials'
import { VolunteerCta } from './components/VolunteerCta'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Animal Shelter — Pet Adoption Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900 transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <PetStrip />
        <SelectPet />
        <About />
        <Video />
        <Process />
        <Testimonials />
        <VolunteerCta />
      </main>
      <Footer />
    </div>
  )
}
