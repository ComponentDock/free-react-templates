import { useEffect } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { BookingForm } from './components/BookingForm'
import { Intro } from './components/Intro'
import { Facilities } from './components/Facilities'
import { Guestbook } from './components/Guestbook'
import { VideoSection } from './components/VideoSection'
import { About } from './components/About'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Riviera — Hotel & Spa Template'
  }, [])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <BookingForm />
        <Intro />
        <Facilities />
        <Guestbook />
        <VideoSection />
        <About />
      </main>
      <Footer />
    </>
  )
}
