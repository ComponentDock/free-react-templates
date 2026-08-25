import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { ClientHighlights } from './components/ClientHighlights'
import { About } from './components/About'
import { Services } from './components/Services'
import { Testimonial } from './components/Testimonial'
import { FeaturedProjects } from './components/FeaturedProjects'
import { Support } from './components/Support'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <Hero />
      <ClientHighlights />
      <About />
      <Services />
      <Testimonial />
      <FeaturedProjects />
      <Support />
      <Footer />
    </div>
  )
}
