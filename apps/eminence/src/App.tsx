import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { ExperienceTabs } from './components/ExperienceTabs'
import { Services } from './components/Services'
import { Gallery } from './components/Gallery'
import { Testimonials } from './components/Testimonials'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <ExperienceTabs />
      <Services />
      <Gallery />
      <Testimonials />
      <Footer />
    </div>
  )
}
