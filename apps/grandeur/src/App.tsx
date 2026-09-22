import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { BookingForm } from './components/BookingForm'
import { About } from './components/About'
import { Rooms } from './components/Rooms'
import { Testimonials } from './components/Testimonials'
import { BlogPosts } from './components/BlogPosts'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Grandeur — Luxury Hotel Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-ink">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <BookingForm />
        <About />
        <Rooms />
        <Testimonials />
        <BlogPosts />
      </main>
      <Footer />
    </div>
  )
}
