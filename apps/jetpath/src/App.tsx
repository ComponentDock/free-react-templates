import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Destinations } from './components/Destinations'
import { Packages } from './components/Packages'
import { WhyChooseUs } from './components/WhyChooseUs'
import { Testimonials } from './components/Testimonials'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-jet-text">
      <Navbar />
      <main>
        <Hero />
        <Destinations />
        <Packages />
        <WhyChooseUs />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
