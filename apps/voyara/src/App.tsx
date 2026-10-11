import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { ServiceTiles } from './components/ServiceTiles'
import { Welcome } from './components/Welcome'
import { Facilities } from './components/Facilities'
import { Gallery } from './components/Gallery'
import { BookingForm } from './components/BookingForm'
import { ContactInfo } from './components/ContactInfo'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="font-[family-name:var(--font-body)]">
      <Navbar />
      <main>
        <Hero />
        <ServiceTiles />
        <Welcome />
        <Facilities />
        <Gallery />
        <BookingForm />
        <ContactInfo />
      </main>
      <Footer />
    </div>
  )
}
