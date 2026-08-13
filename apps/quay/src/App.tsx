import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Work } from './components/Work'
import { Services } from './components/Services'
import { Testimonials } from './components/Testimonials'
import { Footer } from './components/Footer'

/* Quay — interior design studio landing page. Sections follow the source
   reference order: Navbar → Hero → Work → Services → Testimonials → Footer. */
export function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Navbar />
      <main>
        <Hero />
        <Work />
        <Services />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}
