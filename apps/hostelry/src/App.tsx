import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { BookingWidget } from './components/BookingWidget'
import { Accomodation } from './components/Accomodation'
import { Facilities } from './components/Facilities'
import { About } from './components/About'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

/* Full page composition in the original's section order: navbar → hero →
   booking widget → accomodation → facilities → about → testimonials → blog →
   footer. */
export function App() {
  useEffect(() => {
    document.title = 'Hostelry — Hotel & Resort'
  }, [])

  return (
    <main className="font-sans antialiased">
      <Navbar />
      <Hero />
      <BookingWidget />
      <Accomodation />
      <Facilities />
      <About />
      <Testimonials />
      <Blog />
      <Footer />
    </main>
  )
}
