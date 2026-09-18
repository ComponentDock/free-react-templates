import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { OpeningHours } from './components/OpeningHours'
import { Services } from './components/Services'
import { About } from './components/About'
import { Testimonials } from './components/Testimonials'
import { Team } from './components/Team'
import { Features } from './components/Features'
import { Appointment } from './components/Appointment'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />
      <main className="pt-24">
        <Hero />
        <OpeningHours />
        <Services />
        <About />
        <Testimonials />
        <Team />
        <Features />
        <Appointment />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
