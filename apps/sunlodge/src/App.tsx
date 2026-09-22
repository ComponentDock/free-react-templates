import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { PopularRooms } from './components/PopularRooms'
import { VideoPreview } from './components/VideoPreview'
import { BookingForm } from './components/BookingForm'
import { BlogCards } from './components/BlogCards'
import { Testimonials } from './components/Testimonials'
import { InstagramFeed } from './components/InstagramFeed'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Sunlodge — Hotel & Accommodation Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-ink">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <PopularRooms />
        <VideoPreview />
        <BookingForm />
        <BlogCards />
        <Testimonials />
        <InstagramFeed />
      </main>
      <Footer />
    </div>
  )
}
