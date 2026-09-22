import { TopBar } from './components/TopBar'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Booking } from './components/Booking'
import { Services } from './components/Services'
import { Rooms } from './components/Rooms'
import { Testimonials } from './components/Testimonials'
import { CtaIntro } from './components/CtaIntro'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-text-dark font-body transition-colors">
      <TopBar />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Booking />
        <Services />
        <Rooms />
        <Testimonials />
        <CtaIntro />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
