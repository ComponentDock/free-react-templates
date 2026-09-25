import { TopBar } from './components/TopBar'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Features } from './components/Features'
import { About } from './components/About'
import { Team } from './components/Team'
import { Pricing } from './components/Pricing'
import { FAQ } from './components/FAQ'
import { Press } from './components/Press'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Navbar />
      <Hero />
      <Services />
      <Features />
      <About />
      <Team />
      <Pricing />
      <FAQ />
      <Press />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
    </div>
  )
}
