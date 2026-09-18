import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Services } from './components/Services'
import { Testimonials } from './components/Testimonials'
import { Clients } from './components/Clients'
import { HowItWorks } from './components/HowItWorks'
import { FAQ } from './components/FAQ'
import { Footer } from './components/Footer'
import { BackToTop } from './components/BackToTop'

export function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Clients />
      <HowItWorks />
      <FAQ />
      <Footer />
      <BackToTop />
    </div>
  )
}
