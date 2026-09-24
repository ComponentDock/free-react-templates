import { Navbar } from './components/Navbar'
import { HeroBanner } from './components/HeroBanner'
import { InfoBoxes } from './components/InfoBoxes'
import { Departments } from './components/Departments'
import { Testimonials } from './components/Testimonials'
import { News } from './components/News'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroBanner />
      <InfoBoxes />
      <Departments />
      <Testimonials />
      <News />
      <Newsletter />
      <Footer />
    </div>
  )
}
