import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { About } from './components/About'
import { CaseStudies } from './components/CaseStudies'
import { FAQ } from './components/FAQ'
import { Features } from './components/Features'
import { Testimonials } from './components/Testimonials'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="font-poppins">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <CaseStudies />
        <FAQ />
        <Features />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}
