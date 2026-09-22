import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { BookingForm } from './components/BookingForm'
import { About } from './components/About'
import { Rooms } from './components/Rooms'
import { Counter } from './components/Counter'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { InstagramGallery } from './components/InstagramGallery'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <BookingForm />
        <About />
        <Rooms />
        <Counter />
        <Testimonials />
        <Blog />
        <InstagramGallery />
      </main>
      <Footer />
    </div>
  )
}
