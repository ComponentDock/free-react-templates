import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { BookingSearch } from './components/BookingSearch'
import { Services } from './components/Services'
import { About } from './components/About'
import { BlogPosts } from './components/BlogPosts'
import { Faq } from './components/Faq'
import { Testimonials } from './components/Testimonials'
import { Instagram } from './components/Instagram'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Concierge — Travel & Hotel Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-ink">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <BookingSearch />
        <Services />
        <About />
        <BlogPosts />
        <Faq />
        <Testimonials />
        <Instagram />
      </main>
      <Footer />
    </div>
  )
}
