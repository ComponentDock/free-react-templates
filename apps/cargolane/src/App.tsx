import { useEffect } from 'react'
import { About } from './components/About'
import { Blog } from './components/Blog'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { HowItWorks } from './components/HowItWorks'
import { Industries } from './components/Industries'
import { Navbar } from './components/Navbar'
import { Services } from './components/Services'
import { Team } from './components/Team'
import { Testimonials } from './components/Testimonials'
import { VideoCover } from './components/VideoCover'

export function App() {
  useEffect(() => {
    document.title = 'Cargolane — Logistics & Freight Company'
  }, [])

  return (
    <div id="top">
      <Navbar />
      <main>
        <Hero />
        <About />
        <HowItWorks />
        <Team />
        <Services />
        <Industries />
        <VideoCover />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
