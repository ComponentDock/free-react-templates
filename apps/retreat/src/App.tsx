import { TopBar } from './components/TopBar'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { BookingForm } from './components/BookingForm'
import { About } from './components/About'
import { Services } from './components/Services'
import { Rooms } from './components/Rooms'
import { Testimonials } from './components/Testimonials'
import { Gallery } from './components/Gallery'
import { Blog } from './components/Blog'
import { CTA } from './components/CTA'
import { Partners } from './components/Partners'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-body)]">
      <TopBar />
      <Navbar />
      <Hero />
      <BookingForm />
      <About />
      <Services />
      <Rooms />
      <Testimonials />
      <Gallery />
      <Blog />
      <CTA />
      <Partners />
      <Footer />
    </div>
  )
}
