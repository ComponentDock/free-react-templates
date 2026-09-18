import { TopBar } from './components/TopBar'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Team } from './components/Team'
import { HowItWorks } from './components/HowItWorks'
import { Services } from './components/Services'
import { Testimonials } from './components/Testimonials'
import { Specialties } from './components/Specialties'
import { Blog } from './components/Blog'
import { Contact } from './components/Contact'
import { CTABanner } from './components/CTABanner'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Navbar />
      <Hero />
      <About />
      <Team />
      <HowItWorks />
      <Services />
      <Testimonials />
      <Specialties />
      <Blog />
      <Contact />
      <CTABanner />
      <Footer />
    </div>
  )
}
