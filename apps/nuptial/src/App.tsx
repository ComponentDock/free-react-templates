import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Invite } from './components/Invite'
import { BrideGroom } from './components/BrideGroom'
import { LoveStory } from './components/LoveStory'
import { SweetMessages } from './components/SweetMessages'
import { FamilyFriends } from './components/FamilyFriends'
import { PlaceTime } from './components/PlaceTime'
import { RsvpForm } from './components/RsvpForm'
import { Gallery } from './components/Gallery'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Nuptial — Wedding Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-ink-900 transition-colors dark:bg-gray-950 dark:text-stone-100">
      <Navbar />
      <main>
        <Hero />
        <Invite />
        <BrideGroom />
        <LoveStory />
        <SweetMessages />
        <FamilyFriends />
        <PlaceTime />
        <RsvpForm />
        <Gallery />
      </main>
      <Footer />
    </div>
  )
}
