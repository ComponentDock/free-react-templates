import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { BookingCard } from './components/BookingCard'
import { Features } from './components/Features'
import { Packages } from './components/Packages'
import { Blogs } from './components/Blogs'
import { AboutSplit } from './components/AboutSplit'
import { ContactInfo } from './components/ContactInfo'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <main>
        <Hero />
        <BookingCard />
        <Features />
        <Packages />
        <Blogs />
        <AboutSplit />
        <ContactInfo />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
