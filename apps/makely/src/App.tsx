import { TopBar } from './components/TopBar'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { Gallery } from './components/Gallery'
import { AboutDark } from './components/AboutDark'
import { Testimonials } from './components/Testimonials'
import { Services } from './components/Services'
import { About } from './components/About'
import { Team } from './components/Team'
import { Blog } from './components/Blog'
import { Contact } from './components/Contact'
import { CTA } from './components/CTA'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Navbar />
      <Hero />
      <Features />
      <Gallery />
      <AboutDark />
      <Testimonials />
      <Services />
      <About />
      <Team />
      <Blog />
      <Contact />
      <CTA />
      <Footer />
    </div>
  )
}
