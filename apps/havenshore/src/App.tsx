import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { BookingForm } from './components/BookingForm'
import { VideoIntro } from './components/VideoIntro'
import { RoomGallery } from './components/RoomGallery'
import { Pampering } from './components/Pampering'
import { AboutFeatures } from './components/AboutFeatures'
import { FullWidthImage } from './components/FullWidthImage'
import { Testimonials } from './components/Testimonials'
import { InstagramGallery } from './components/InstagramGallery'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Havenshore — Hotel & Resort Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <BookingForm />
        <VideoIntro />
        <RoomGallery />
        <Pampering />
        <AboutFeatures />
        <FullWidthImage />
        <Testimonials />
        <InstagramGallery />
      </main>
      <Footer />
    </div>
  )
}
