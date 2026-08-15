import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { About } from './components/About'
import { Portfolio } from './components/Portfolio'
import { HowWeWork } from './components/HowWeWork'
import { Team } from './components/Team'
import { Testimonials } from './components/Testimonials'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Portfolio />
        <HowWeWork />
        <Team />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
