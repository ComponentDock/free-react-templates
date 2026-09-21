import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Intro } from './components/Intro'
import { VideoSection } from './components/VideoSection'
import { SignatureDish } from './components/SignatureDish'
import { TheMenu } from './components/TheMenu'
import { ReservationForm } from './components/ReservationForm'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'VenuePoint — Restaurant & Dining'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-gray-100">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Intro />
        <VideoSection />
        <SignatureDish />
        <TheMenu />
        <ReservationForm />
      </main>
      <Footer />
    </div>
  )
}
